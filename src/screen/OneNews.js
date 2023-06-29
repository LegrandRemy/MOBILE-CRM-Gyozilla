import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor'
import { Image } from 'native-base'
import Loader from '../components/loader'

const OneNews = () => {
  const route = useRoute()
  const { id } = route.params
  const [news, setNews] = useState(null)

  useEffect(() => {
    instanceAxios
      .get(`news/${id}`)
      .then((res) => {
        setNews(res.data)
      })
      .catch((error) => {
        setNews(null)
      })
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {news ? (
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
      ) : (
        <Loader />
      )}
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
    borderRadius: 8,
  },
  newsImage: {
    width: 450,
    height: 350,
    marginTop: 10,
    borderRadius: 4,
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
