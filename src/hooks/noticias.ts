import { useEffect, useState } from "react"
import { NoticiasService } from "../services/Noticias.service"
import { useAppDispatch, useAppSelector } from "./store";
import { cargarNoticias } from "../store/noticias";

export const useNoticia = () => {
  const dispatch = useAppDispatch();
  const noticias = useAppSelector((state) => state.noticias.noticias);
  const [loading, setLoading] = useState<boolean>(false)

  const sendComentario = async (id_noticia: string, comentario: string) => {
    try {
      await NoticiasService.sendNoticia(id_noticia, comentario)
      return true
    } catch (error) {
      return false
    }

  }

  const setNoticias = async () => {
    setLoading(true)

    const response = await NoticiasService.getNews()
    dispatch(cargarNoticias(response))
    setLoading(false)
  }
  useEffect(() => {
    setNoticias()
  }, [])



  return {

    sendComentario,
    loading,
    noticias
  }
}