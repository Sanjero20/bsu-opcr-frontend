import { toast } from 'react-toastify';

export const showToast = (message) => {
  toast(message);
};

export const showSuccessToast = (message) => {
  toast.success(message);
};

let defaultErrorMsg = 'Something went wrong, Try Again!';
export const showErrorToast = (message = defaultErrorMsg) => {
  toast.error(message, { autoClose: 2000 });
};
