
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StackParamList } from '../../Router';
import { Comentario } from '../../components/Comentario';
import { Input } from '../../components/Input';
import { CaretDown } from '../../components/Icon/CaretDown';
import { constants } from '../../styles/constants';
import { NextStep } from '../../components/Icon/NextStep';
import { useNoticia } from '../../hooks/noticias';
type Props = NativeStackScreenProps<StackParamList, 'VerPosts'>;

const comentarios = [
  { nombre: 'Dany', comentario: 'me parece bien ' },
  { nombre: 'Sany', comentario: 'me parece bien ' }
]
export const VerPosts: any = ({ navigation, route }: Props) => {
  const post = route.params.post;
  const { algo } = useNoticia()



  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.postContainer}>
          <Image source={{ uri: post.imagen }} style={styles.postImage} />
          <Text style={styles.postTitle}>{post.titulo}</Text>
          <Text style={styles.postDetails}>{post.fecha} | {post.autor}</Text>
          <Text style={styles.postContent}>{post.contenido}</Text>
          <Text style={styles.postGroup}>Grupo: {post.grupo}</Text>
        </View>
        <View style={styles.comentariosContainer}>
          <Text style={styles.comentariosTitle}>Comentarios: {comentarios.length}</Text>
          <View style={styles.inputContainer}>
            <Input />
            <NextStep
              color={constants.colors.primary}
              size={40}
              style={styles.NextStep}
            />
          </View>

          <View >

            {comentarios.map((comentario, index) => (
              <Comentario key={index} comentario={comentario} />
            )
            )}


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
    alignItems: 'center',
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
    fontSize: 18,
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