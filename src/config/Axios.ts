import Axios from 'axios';

import 'dotenv/config';

export const AxiosGeneral = Axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 40000,
});


