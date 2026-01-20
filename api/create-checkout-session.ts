import Stripe from 'stripe';

const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || '').trim());

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const origin = req.headers.origin || 'https://fixovasoft.com';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Fixovasoft File Recovery – Premium',
              description: 'One-time purchase for full unlimited recovery.',
              // images: ['https://fixovasoft.com/assets/box-art.png'], 
            },
            unit_amount: 4999, // $49.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe session creation failed:', error);
    
    // safe debug logging
    const key = process.env.STRIPE_SECRET_KEY || '';
    console.error('Debug Info:', { 
      keyLength: key.length, 
      keyPrefix: key.substring(0, 7) + '...',
      isTrimmed: key === key.trim()
    });

    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
