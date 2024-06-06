import { useEffect } from "react"
import { NoticiasService } from "../services/Noticias.service"

export const useNoticia = () => {


  const setNoticias = async () => {
    console.log('sd')
    NoticiasService.getNews()
  }
  useEffect(() => {
    setNoticias()
  }, [])

  const algo = () => {

  }

  return {
    algo
  }
}