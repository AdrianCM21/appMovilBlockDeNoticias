import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../Router';


export interface Post {
  titulo: string;
  fecha: string;
  contenido: string;
  imagen: string;
  subtitulo: string;
  autor: string;
  grupo: string;
}

export const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const [posts, setPosts] = useState<Post[]>([
    {
      titulo: "Exploración del Espacio: El Futuro de la Humanidad",
      fecha: "2024-05-31",
      contenido: "La exploración espacial está avanzando rápidamente con nuevas misiones a Marte y más allá. En este artículo, exploramos las últimas innovaciones y descubrimientos en el campo de la astronáutica.",
      imagen: "https://example.com/images/space-exploration.jpg",
      subtitulo: "Nuevas Fronteras en el Universo",
      autor: "Dr. Jane Smith",
      grupo: "Ciencia y Tecnología"
    },
    {
      titulo: "Exploración del Espacio: El Futuro de la Humanidad",
      fecha: "2024-05-31",
      contenido: "La exploración espacial está avanzando rápidamente con nuevas misiones a Marte y más allá. En este artículo, exploramos las últimas innovaciones y descubrimientos en el campo de la astronáutica.",
      imagen: "https://example.com/images/space-exploration.jpg",
      subtitulo: "Nuevas Fronteras en el Universo",
      autor: "Dr. Jane Smith",
      grupo: "Ciencia y Tecnología"
    }
    , {
      titulo: "Exploración del Espacio: El Futuro de la Humanidad",
      fecha: "2024-05-31",
      contenido: "La exploración espacial está avanzando rápidamente con nuevas misiones a Marte y más allá. En este artículo, exploramos las últimas innovaciones y descubrimientos en el campo de la astronáutica.",
      imagen: "https://example.com/images/space-exploration.jpg",
      subtitulo: "Nuevas Fronteras en el Universo",
      autor: "Dr. Jane Smith",
      grupo: "Ciencia y Tecnología"
    }
    // Puedes agregar más posts aquí
  ]);

  return (
    <ScrollView style={styles.container}>
      {posts.map((post, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('VerPosts', { post });
          }}
        >
          <View style={styles.postContainer}>
            <Image source={{ uri: post.imagen }} style={styles.postImage} />
            <Text style={styles.postTitle}>{post.titulo}</Text>
            <Text style={styles.postDetails}>{post.fecha} | {post.autor}</Text>
            <Text style={styles.postContent}>{post.contenido}</Text>
            <Text style={styles.postGroup}>Grupo: {post.grupo}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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


