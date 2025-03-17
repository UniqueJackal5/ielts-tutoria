import axios from 'axios';

type PaymentRequest = {
  amount: number;
  transactionId: string;
  productCode: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
};

export const khaltiPayment = async (payload: PaymentRequest) => {
  try {
    const response = await axios.post('https://khalti.com/api/v2/payment/initiate/', {
      ...payload,
      test_mode: process.env.NODE_ENV === 'development',
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/khalti-callback`,
      website_url: process.env.NEXT_PUBLIC_BASE_URL,
      amount: payload.amount * 100, // Convert to paisa
      purchase_order_id: payload.transactionId,
      customer_info: payload.customerInfo,
      product_details: {
        identity: payload.productCode,
        name: 'IELTS Tutoring Service',
      }
    }, {
      headers: {
        Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Khalti payment error:', error);
    throw new Error('Payment initialization failed');
  }
};

export const esewaPayment = async (payload: PaymentRequest) => {
  try {
    if (!process.env.ESEWA_MERCHANT_ID) {
      throw new Error('Esewa merchant ID not configured');
    }

    const params = new URLSearchParams({
      scd: process.env.ESEWA_MERCHANT_ID,
      su: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/esewa-callback`,
      amt: payload.amount.toString(),
      pid: payload.transactionId,
      tAmt: payload.amount.toString(),
    });

    return {
      payment_url: `https://rc-epay.esewa.com.np/merchantapi/test/initiate?${params.toString()}`
    };
  } catch (error) {
    console.error('Esewa payment error:', error);
    throw new Error('Esewa payment initialization failed');
  }
};

// Add verification functions and error handling specific to Nepali payment systems
export const verifyKhaltiPayment = async (pidx: string) => {
  const response = await axios.post('https://test.khalti.com/api/v2/payment/status/', {
    pidx
  }, {
    headers: {
      Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`
    }
  });

  return response.data;
};