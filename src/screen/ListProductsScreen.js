import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Radio, ScrollView, useNavigation } from 'native-base'

import { instanceAxios } from '../utils/interceptor'

import CustomCardProduct from '../components/CustomCardProduct'
import CustomButton from '../components/CustomButton'
import Loader from '../components/loader'
import GoBackButton from '../components/GoBackButton'

const checkNew = (item) => {
  const today = new Date()
  const lastWeek = new Date(today)
  lastWeek.setDate(lastWeek.getDate() - 7)
  return (
    new Date(item.createdAt) >= lastWeek && new Date(item.createdAt) <= today
  )
}

const ListProductsScreen = ({ route, navigation, props }) => {
  const [products, setProducts] = useState([])
  const [menus, setMenus] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const [selectedStep, setSelectedStep] = useState(0)
  const [lastStep, setLastStep] = useState(false)

  const [selectedItemFromMenu, setSelectedItemFromMenu] = useState([])
  const [selectedItem, setSelectedItem] = useState('')

  const { name } = route.params
  useEffect(() => {
    instanceAxios
      .get('/products')
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

    instanceAxios
      .get('/menus')
      .then((response) => {
        setMenus(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [name])

  useEffect(() => {
    if (products.length !== 0 && !isFiltered && name) {
      let filteredProducts = []
      switch (name) {
        case 'Menus':
          filteredProducts = products
          break
        case 'News':
          filteredProducts = products.filter(checkNew)
          setIsFiltered(true)
          break
        case 'Starter':
          filteredProducts = products.filter(
            (product) => product.productCategory.name === 'Entrées',
          )
          setIsFiltered(true)
          break
        case 'Dishes':
          filteredProducts = products.filter(
            (product) => product.productCategory.name === 'Plats',
          )
          setIsFiltered(true)
          break
        case 'Desserts':
          filteredProducts = products.filter(
            (product) => product.productCategory.name === 'Desserts',
          )
          setIsFiltered(true)
          break
        case 'Drinks':
          filteredProducts = products.filter(
            (product) => product.productCategory.name === 'Boissons',
          )
          setIsFiltered(true)
          break
      }
      setProducts(filteredProducts)
    }
  }, [products])

  const handleMenuClick = (menuId) => {
    setProducts(products.filter((product) => product.id_menus === menuId))
    setIsFiltered(true)
    setSelectedStep(0)
    setIsMenuClicked(true)
  }

  const handleDetailsProductClick = (productId) => {
    navigation.navigate('ProductDetailsScreen', { productId })
  }

  const totalSteps = ['Entrées', 'Plats', 'Desserts', 'Boissons']

  const handleStepContinue = () => {
    if (selectedStep < totalSteps.length - 1) {
      setSelectedStep((prevStep) => prevStep + 1)
      let selected = [...selectedItemFromMenu]
      selected[selectedStep] = selectedItem

      setSelectedItemFromMenu(selected)
    } else {
      setLastStep(true)
    }
  };
  // console.log("selectedItemFromMenu", selectedItemFromMenu);
  // console.log("selectedStep", selectedStep);

  const handleStepBack = () => {
    if (selectedStep > 0) {
      setSelectedStep((prevStep) => prevStep - 1)
    }
  }

  const filteredProducts = products.filter(
    (product) => product.productCategory.name === totalSteps[selectedStep],
  )
  const dataToShow = isMenuClicked ? filteredProducts : products

  console.log(
    'selectedItemFromMenu[selectedStep]',
    selectedItemFromMenu[selectedStep - 1],
  )
  console.log('selectedItemFromMenu', selectedItemFromMenu)
  console.log('selectedStep', selectedStep)

  // const goBack = () => {
  //   navigation.goBack();
  // };
  return (
    <ScrollView style={styles.container}>
      <GoBackButton customStyleGoBack={{}} />
      <View style={styles.cardTitle}>
        <Text style={styles.title}>{route.params.title}</Text>
      </View>
      {name === 'Menus' && !isFiltered ? (
        <View style={styles.cardContainer}>
          {menus.map((menu) => (
            <CustomCardProduct
              menu={menu}
              key={menu.id}
              onPress={() => handleMenuClick(menu.id)}
              customStyle={{ padding: 5 }}
            />
          ))}
        </View>
      ) : isFiltered ? (
        <>
          {isMenuClicked ? (
            <View style={styles.cardContainer}>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                aria-label="product"
                onChange={(value) => {
                  setSelectedItem(value)
                }}
                value={selectedItemFromMenu[selectedStep] || null}
              >
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}
                >
                  {filteredProducts.map((product) => (
                    <View
                      key={product.id}
                      style={{
                        width: '50%',
                        alignItems: 'center',
                      }}
                    >
                      <CustomCardProduct
                        product={product}
                        onPress={() => handleDetailsProductClick(product.id)}
                        customStyle={{ width: '100%', padding: 5 }}
                      />
                      <Radio
                        my={1}
                        accessibilityLabel={`product-${product.id}`}
                        aria-label={`product-${product.id}`}
                        value={product.id}
                      ></Radio>
                    </View>
                  ))}
                </View>
              </Radio.Group>
            </View>
          ) : (
            <View style={styles.cardContainer}>
              {products.map((product) => (
                <CustomCardProduct
                  customStyle={{ padding: 5 }}
                  key={product.id}
                  product={product}
                  onPress={() => handleDetailsProductClick(product.id)}
                />
              ))}
            </View>
          )}

          {isMenuClicked && (
            <View style={styles.navigationButtons}>
              {selectedStep > 0 && (
                <CustomButton onPress={handleStepBack} textButton="retour" />
              )}
              {selectedStep < totalSteps.length - 1 ? (
                <CustomButton
                  onPress={() => handleStepContinue()}
                  textButton={'Continuer'}
                />
              ) : (
                <CustomButton
                  onPress={() => handleStepContinue()}
                  textButton={'Valider'}
                />
              )}
            </View>
          )}
        </>
      ) : (
        <>
          <Text>en attente de produit</Text>
          <Loader />
        </>
      )}
    </ScrollView>
  )
}

export default ListProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  box: {
    flexDirection: 'column',
    width: '100%',
  },
  cardTitle: {
    backgroundColor: '#faeccb',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
})
