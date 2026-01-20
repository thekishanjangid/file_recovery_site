import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Fixovasoft File Recovery - Premium License',
              description: 'One-time purchase for full unlimited recovery.',
              images: ['https://fixovasoft.com/assets/box-art.png'], // Optional placeholder
            },
            unit_amount: 4999, // $49.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/payment-success`,
      cancel_url: `${req.headers.origin}/payment-cancel`,
    });

    res.status(200).json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
