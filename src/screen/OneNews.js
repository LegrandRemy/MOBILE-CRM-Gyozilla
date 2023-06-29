import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor'
import { Image, Skeleton, Box } from 'native-base'

const OneNews = () => {
  const route = useRoute()
  const { id } = route.params
  const [news, setNews] = useState(null)
  const navigation = useNavigation()
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
          <Box style={{ width: '25%', marginTop: 30, alignSelf: 'flex-end' }}>
            <Button
              color="orange"
              title="Retour"
              onPress={() => navigation.goBack()}
            />
          </Box>
        </View>
      ) : (
        <Box alignItems={'center'} marginY={-188} marginBottom={3}>
          <Skeleton borderRadius={10} width={'90%'} height={200} />
        </Box>
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
    // color: '#77614c',
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#faeccb',
    // backgroundColor: '#77614c',
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
