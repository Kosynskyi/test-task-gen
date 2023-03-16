import axios from 'axios';
import { BASE_URL } from 'helpers/constants';

export const getToken = async () => {
  try {
    const { data } = await axios(
      `${BASE_URL}auth/anonymous?platform=subscriptions`
    );
    return data.token;
  } catch (error) {
    console.log(error.message);
  }
};
