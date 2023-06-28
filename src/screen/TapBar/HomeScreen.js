import React, { useEffect, useState } from 'react'
import { Image, ScrollView, TouchableHighlight } from 'react-native'
import { Box, Heading, Text, FlatList } from 'native-base'
import ListHomeImgBG from '../../components/ListHomeImgBG'
import SearchHomeInput from '../../components/SearchHomeInput'
import { instanceAxios } from '../../utils/interceptor'
import FlatListNewsCarousel from '../../components/FlatListNewsCarousel'
import LastProductBannerHome from '../../components/LastProductBannerHome'
import { useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext'

const Home = () => {
  const [lastNews, setLastNews] = useState()
  const [lastProducts, setLastProducts] = useState()
  console.log('lastProducts', lastProducts)
  useEffect(() => {
    instanceAxios
      .get('products/lastProduct')
      .then((res) => {
        setLastProducts(res.data)
      })
      .catch((error) => {
        setLastProducts([])
      })
  }, [])

  useEffect(() => {
    instanceAxios
      .get('lastnews')
      .then((res) => {
        setLastNews(res.data)
      })
      .catch((error) => {
        setLastNews([])
      })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Box paddingBottom={10} backgroundColor={'#77614c'}>
        <SearchHomeInput />
        <Heading color="#faeccb" fontSize={18} marginLeft={4} marginTop={4}>
          En ce moment
        </Heading>
        <FlatList
          horizontal={true}
          data={lastProducts}
          key={(item) => item.id}
          renderItem={(item) => <LastProductBannerHome item={item} />}
        />
        <LastProductBannerHome item={lastProducts} />
      </Box>
      <Box
        backgroundColor={'#5F8D85'}
        paddingLeft={4}
        paddingTop={5}
        paddingBottom={8}
      >
        <Heading color="#faeccb" fontSize={18} marginTop={4} marginBottom={2}>
          Chaud devant !!!!!
        </Heading>
        <Text>Découvrez les dernières actualités Gyozilla®</Text>
        <FlatListNewsCarousel propsData={lastNews} />
      </Box>
      <Box
        backgroundColor={'#77614c'}
        justifyContent={'center'}
        paddingBottom={6}
        paddingLeft={4}
      >
        <Heading
          color="#faeccb"
          width={250}
          fontSize={18}
          marginTop={7}
          marginBottom={4}
        >
          Une petite ou une grosse faim ? &#127836;
        </Heading>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          flexDirection={'row'}
          marginBottom={0}
          paddingLeft={0}
          paddingBottom={0}
          borderRadius={10}
          width={380}
          height={'auto'}
        >
          <ListHomeImgBG lastNews={lastNews} />
        </Box>
      </Box>
    </ScrollView>
  )
}

export default Home
