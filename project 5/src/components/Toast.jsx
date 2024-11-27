import toast, { Toaster } from 'react-hot-toast';

export const showToast = (message, type = 'success') => {
  const options = {
    duration: 3000,
    position: 'top-right',
    style: {
      background: type === 'success' ? '#059669' : '#DC2626',
      color: '#fff',
      padding: '16px',
      borderRadius: '8px',
    },
  };
  
  toast(message, options);
};

export function Toast() {
  return <Toaster />;
}