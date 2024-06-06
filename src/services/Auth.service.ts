import { Api } from "./Api";


export type RegisterPayload = {
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  password: string;
  password_confirmation: string;
  expo_token: string | null;
};

export const AuthService = {

  login: async (usuario: string, password: string) => {
    const response = await Api.post('/login', {
      usuario,
      password,
    });
    return response.data;
  },

};
