
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackParamList } from '../../Router';
import { Comentario } from '../../components/Comentario';
import { Input } from '../../components/Input';
import { CaretDown } from '../../components/Icon/CaretDown';
import { constants } from '../../styles/constants';
import { NextStep } from '../../components/Icon/NextStep';
import { useNoticia } from '../../hooks/noticias';
import { useAlert } from '../../hooks/alert';
type Props = NativeStackScreenProps<StackParamList, 'VerPosts'>;


export const VerPosts: any = ({ navigation, route }: Props) => {
  const post = route.params.post;
  const { sendComentario } = useNoticia()
  const [comentarioText, setComentarioText] = useState<string>('')
  const alert = useAlert()

  const handleSendComenario = async () => {
    const response = await sendComentario(post.id, comentarioText)
    if (response) {
      alert('success', 'Su cometario a sido publicado con exito, aparecera cuando un administrador lo apurebe ')
    } else {
      alert('danger', 'No se puedo publicar su comenario reintentelo mas tarde, Internal error ')
    }
    setComentarioText('')

  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.postContainer}>
          <Image source={{ uri: post.imagen }} style={styles.postImage} />
          <Text style={styles.postTitle}>{post.titulo}</Text>
          <Text style={styles.postDetails}>{post.fecha} | {post.autor.usuario}</Text>
          <Text style={styles.postContent}>{post.contenido}</Text>
          <Text style={styles.postGroup}>Grupo: {post.grupo.grupo}</Text>
        </View>
        <View style={styles.comentariosContainer}>
          <Text style={styles.comentariosTitle}>Comentarios: {post.comentarios.length}</Text>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={(text: any) => {
                setComentarioText(text);
              }}
              value={comentarioText ? comentarioText : ''}

            />
            <TouchableOpacity
              onPress={handleSendComenario}
            >
              <NextStep
                color={constants.colors.primary}
                size={40}
                style={styles.NextStep}
              />
            </TouchableOpacity>

          </View>

          <View >

            {post.comentarios.map((comentario, index) => (
              <Comentario key={index} comentario={comentario} />
            )
            ).reverse()}


          </View>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // height: '100%',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  postContainer: {
    backgroundColor: '#fff',

    padding: 15,
    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  postDetails: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  postContent: {
    fontSize: 16,
    marginTop: 10,
  },
  postGroup: {
    fontSize: 14,
    color: '#1e90ff',
    marginTop: 10,
  },
  comentariosTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: constants.colors.primary
  },
  comentariosContainer: {
    width: '100%',
    paddingLeft: 10
  },
  comentarios: {

    width: '100%',
    borderColor: '#fff',

    borderWidth: 1,
    padding: 15,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#888',
    borderRadius: 20,
    marginBottom: 14,
  },
  comentarioUserTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff'
  },
  comentarioUserComentario: {
    fontSize: 16,

    marginTop: 2,
    color: '#fff'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  NextStep: {
    transform: [{ rotate: '180deg' }],
    marginHorizontal: 20,
    marginTop: 25
  }
});