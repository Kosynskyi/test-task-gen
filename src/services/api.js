import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from 'helpers/constants';

export const getToken = async () => {
  try {
    const { data } = await axios(
      `${BASE_URL}auth/anonymous?platform=subscriptions`
    );
    return data.token;
  } catch (error) {
    toast.error(error.message, {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
};
