import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../Router';
import { useNoticia } from '../../hooks/noticias';
import { constants } from '../../styles/constants';


export interface Post {
  id: string,
  titulo: string;
  fecha: string;
  contenido: string;
  imagen: string;
  subtitulo: string;
  autor: {
    usuario: string
  };
  grupo: {
    grupo: string
  },
  comentarios: {
    nombre: string,
    comentario: string,
    fecha: string
  }[]
}

export const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const { noticias, loading } = useNoticia()

  return (
    <ScrollView style={styles.container}>
      {!loading && noticias && noticias.length > 0 && noticias.map((post, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('VerPosts', { post });
          }}
        >
          <View style={styles.postContainer}>
            <Image source={{ uri: post.imagen }} style={styles.postImage} />
            <Text style={styles.postTitle}>{post.titulo}</Text>
            <Text style={styles.postDetails}>{post.fecha} | {post.autor.usuario}</Text>
            <Text style={styles.postContent}>{post.contenido}</Text>
            <Text style={styles.postGroup}>Grupo: {post.grupo.grupo}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {
        (!noticias || noticias.length) && (
          <View style={styles.noHayDatosContainer}>
            <Text style={styles.noHayDatosText}>No hay noticias para mostrar</Text>
          </View>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  noHayDatosContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,

  },
  noHayDatosText: {
    color: constants.colors.primary,
    fontWeight: 'bold',
    fontSize: 23

  },
  postContainer: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postImage: {
    width: '100%',
    height: 200,
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
});


