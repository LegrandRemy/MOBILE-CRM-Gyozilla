import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor'
import { Image } from 'native-base'

const OneNews = () => {
  const route = useRoute()
  const { id } = route.params
  const [news, setNews] = useState()

  useEffect(() => {
    instanceAxios
      .get(`news/${id}`)
      .then((res) => {
        setNews(res.data)
      })
      .catch((error) => {
        setNews([])
      })
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.newsName}>{news?.name}</Text>
        <Image
          source={{ uri: `https://api-gyozilla.onrender.com/${news?.image}` }}
          style={styles.newsImage}
          resizeMode="cover"
          alt="Image de l'actualité"
        />
        <Text style={styles.newsDescription}>{news?.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  newsName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#faeccb',
    padding: 10,
  },
  newsImage: {
    width: '100%',
    height: 250,
    marginTop: 10,
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#5F8D85',
    fontWeight: '500',
  },
})

export default OneNews
