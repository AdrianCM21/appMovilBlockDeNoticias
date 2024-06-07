import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { constants } from '../styles/constants'
import { useNoticia } from '../hooks/noticias'

export interface Comentario {
  nombre: string,
  comentario: string
}

interface ComentarioProps {
  comentario: Comentario
}

export const Comentario = ({ comentario }: ComentarioProps) => {

  return (
    <View style={styles.comentarios}>
      <View>
        <Text style={styles.comentarioUserTitle}>{comentario.nombre}</Text>
        <Text style={styles.comentarioUserComentario}>{comentario.comentario}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  comentarios: {

    width: '100%',
    borderColor: constants.colors.primary,

    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',

    borderRadius: 20,
    marginBottom: 14,
    marginTop: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  comentarioUserTitle: {
    fontSize: 22,
    marginTop: 5,
    color: constants.colors.primary,
    fontWeight: 'bold'
  },
  comentarioUserComentario: {
    fontSize: 16,

    marginTop: 2,
    color: constants.colors.black,
    fontWeight: 'bold'
  }
});
