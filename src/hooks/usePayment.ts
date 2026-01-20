import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize outside to avoid recreating on every render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export function usePayment() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // 1. Call backend to create session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Network error');
      }

      // 2. Redirect to Stripe
      // Assuming backend returns { url: '...' } for direct redirect
      // OR { id: '...' } for stripe.redirectToCheckout({ sessionId: id })
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback to JS SDK if only ID returned
        const stripe = await stripePromise;
        if (!stripe) throw new Error("Stripe failed to load");
        
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.id,
        });

        if (error) {
          console.error('Stripe redirect error:', error);
        }
      }

    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to start payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCheckout, isLoading };
}
