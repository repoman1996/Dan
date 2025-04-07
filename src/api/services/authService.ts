import { ENDPOINTS } from "../endpoints";
import { store } from "../../store";
import { updateTokens } from "../../store/slices/sessionSlice";

const TOKEN_KEY = 'auth_tokens';

// Create a custom event for notifications
const createNotificationEvent = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
  return new CustomEvent('showNotification', {
    detail: {
      message,
      severity
    }
  });
};

interface SignUpProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  country: string;
  ipCountry: string;
  ipAddress: string;
}
// Store tokens in localStorage
export const storeTokens = (accessToken: string) => {
  try {
    localStorage.setItem(TOKEN_KEY, JSON.stringify({
      accessToken,
      lastUpdated: new Date().getTime()
    }));
    
    // Update Redux store
    store.dispatch(updateTokens({ accessToken }));
  } catch (error) {
    console.log('Error storing token:', error);
    window.dispatchEvent(createNotificationEvent('Failed to store authentication token. Please try again.', 'error'));
    throw new Error('Failed to store authentication token. Please try again.');
  }
};

// Get stored token
export const getStoredTokens = () => {
  try {
    const tokens = localStorage.getItem(TOKEN_KEY);
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    console.log('Error getting stored token:', error);
    return null;
  }
};

// Remove stored tokens
export const removeTokens = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.log('Error removing token:', error);
    window.dispatchEvent(createNotificationEvent('Failed to remove authentication token. Please try again.', 'error'));
    throw new Error('Failed to remove authentication token. Please try again.');
  }
};

export const authService = {
  // Headers with access token
  getHeaders() {
    try {
      const tokens = getStoredTokens();
      return {
        'Content-Type': 'application/json',
        ...(tokens?.accessToken ? { 'Authorization': `Bearer ${tokens.accessToken}` } : {})
      };
    } catch (error) {
      console.log('Error getting headers:', error);
      return { 'Content-Type': 'application/json' };
    }
  },
  
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.message || 'Login failed. Please check your credentials and try again.';
        console.log('Login error:', errorMessage);
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      // Store access token
      storeTokens(data.data.tokens.accessToken);
      
      window.dispatchEvent(createNotificationEvent('Login successful!', 'success'));
      return data;
    } catch (error: any) {
      console.log('Login error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Login failed. Please try again later.', 'error'));
      throw new Error(error.message || 'Login failed. Please try again later.');
    }
  },

  signup: async (props: SignUpProps) => {  
    const { email, password, firstname, lastname, phone, country, ipCountry, ipAddress } = props;
    try {
      const response = await fetch(ENDPOINTS.AUTH.SIGNUP, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, firstname, lastname, phone, country, ipCountry, ipAddress }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.message || 'Signup failed. Please try again.';
        console.log('Signup error:', errorMessage);
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      // Store access token
      storeTokens(data.data.tokens.accessToken);
      
      window.dispatchEvent(createNotificationEvent('Account created successfully!', 'success'));
      return data;
    } catch (error: any) {
      console.log('Signup error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Signup failed. Please try again later.', 'error'));
      throw new Error(error.message || 'Signup failed. Please try again later.');
    }
  },

  signout: async () => {
    try {
      removeTokens();
      window.dispatchEvent(createNotificationEvent('Signed out successfully!', 'success'));
    } catch (error: any) {
      console.log('Signout error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Signout failed. Please try again later.', 'error'));
      throw new Error(error.message || 'Signout failed. Please try again later.');
    }
  },

  verifyEmail: async({email}: {email: string}) => {
    try {
      const response = await fetch(ENDPOINTS.AUTH.VERIFY_EMAIL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || 'Failed to verify email';
        console.log('Verify email error:', errorMessage); 
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      return data;
    } catch (error: any) {
      console.log('Verify email error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Failed to verify email. Please try again later.', 'error'));
      throw new Error(error.message || 'Failed to verify email. Please try again later.');
    }
  },

  verifyEmailCode: async({email, code}: {email: string, code: string}) => {
    try {
      const response = await fetch(ENDPOINTS.AUTH.VERIFY_EMAIL_CODE, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || 'Failed to verify email code';
        console.log('Verify email code error:', errorMessage);
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      return data;
    } catch (error: any) {
      console.log('Verify email code error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Failed to verify email code. Please try again later.', 'error'));
      throw new Error(error.message || 'Failed to verify email code. Please try again later.');
    }
  },

  verifyPhoneCode: async({phone, code}: {phone: string, code: string}) => {
    try {
      const response = await fetch(ENDPOINTS.AUTH.VERIFY_PHONE_CODE, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || 'Failed to verify phone code';
        console.log('Verify phone code error:', errorMessage);  
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      return data;
    } catch (error: any) {
      console.log('Verify phone code error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Failed to verify phone code. Please try again later.', 'error'));
      throw new Error(error.message || 'Failed to verify phone code. Please try again later.');
    }
  },

  verifyPhoneNumber: async ({ phone }: {phone: string}) => {
    try {
      const response = await fetch(ENDPOINTS.AUTH.VERIFY_PHONE, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.message || 'Failed to send verification code';
        console.log('Verify phone number error:', errorMessage);
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      return data;  
    } catch (error: any) {
      console.log('Verify phone number error:', error);
      // window.dispatchEvent(createNotificationEvent(error.message || 'Failed to send verification code. Please try again later.', 'error'));
      throw new Error(error.message || 'Failed to send verification code. Please try again later.');
    }
  },

  fetchWithToken: async (url: string, options: RequestInit = {}) => {
    try {
      // Add auth headers
      const headers = authService.getHeaders();
      const response = await fetch(url, {
        ...options,
        headers: { ...headers, ...(options.headers || {}) }
      });

      if (response.status === 401) {
        // If unauthorized, remove tokens and notify user
        removeTokens();
        throw new Error('Session expired. Please login again.');
      }

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.message || 'Request failed. Please try again.';
        console.log('Fetch error:', errorMessage);
        window.dispatchEvent(createNotificationEvent(errorMessage, 'error'));
        throw new Error(errorMessage);
      }

      return response;
    } catch (error: any) {
      console.log('Fetch error:', error);
      window.dispatchEvent(createNotificationEvent(error.message || 'Request failed. Please try again later.', 'error'));
      throw error;
    }
  }
};
