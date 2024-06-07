import { Api } from "./Api";

// Define el tipo de datos para las noticias
export type News = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
};

export const NoticiasService = {

  // Método para obtener todas las noticias
  getNews: async () => {
    const response = await Api.get('/noticias');
    return response.data;
  },

  sendNoticia: async (id_noticia: string, comentario: string) => {
    const response = await Api.post('/comentarios', {
      id_noticia,
      comentario
    });
    return response.data;
  },


};

