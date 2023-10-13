import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { List, Divider, Collapse, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Box, Card, ScrollView } from 'native-base'
import CustomCardProduct from '../../components/CustomCardProduct'
import CustomCardRestaurantMenu from '../../components/CustomCardRestaurantMenu'
import { REACT_APP_URL_API } from '@env'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const MenuList = ({ route, props }) => {
  const navigation = useNavigation()

  const [expanded, setExpanded] = useState('')

  const handleMenuItemPress = (screenName, data) => {
    navigation.navigate(screenName, data)
  }

  const handleAccordion = (accordionId) => {
    setExpanded(expanded === accordionId ? '' : accordionId)
  }

  return route.name !== 'Menu' ? (
    <View>
      <List.Accordion
        title="Mon compte"
        expanded={expanded === 'monCompte'}
        onPress={() => handleAccordion('monCompte')}
        style={{ backgroundColor: '#eaeaea', color: '#F8A500' }}
        right={() =>
          expanded ? (
            <MaterialCommunityIcons size={20} name="chevron-up" />
          ) : (
            <MaterialCommunityIcons size={20} name="chevron-down" />
          )
        }
      >
        <List.Item
          title="Mon profil"
          onPress={() => handleMenuItemPress('MyAccount')}
          style={{ backgroundColor: '#eaeaea', color: '#F8A500' }}
        />
        <List.Item
          title="Ma fidélité"
          onPress={() => handleMenuItemPress('MyFidelity')}
        />
        <List.Item
          title="Mes commandes"
          onPress={() => handleMenuItemPress('Myorders')}
        />
      </List.Accordion>

      <Divider />

      <List.Accordion
        title="La carte"
        expanded={expanded === 'RestaurantMenu'}
        onPress={() => handleAccordion('RestaurantMenu')}
        style={{ backgroundColor: '#eaeaea' }}
        right={() =>
          expanded ? (
            <MaterialCommunityIcons size={20} name="chevron-up" />
          ) : (
            <MaterialCommunityIcons size={20} name="chevron-down" />
          )
        }
      >
        <List.Item
          title="Nouveautés"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'News',
              title: 'NOUVEAUTES',
            })
          }
        />
        <List.Item
          title="Menus"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Menus',
              title: 'MENU',
            })
          }
        />
        <List.Item
          title="Entrées"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Starter',
              title: 'ENTREES',
            })
          }
        />
        <List.Item
          title="Plats"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Dishes',
              title: 'PLATS',
            })
          }
        />
        <List.Item
          title="Desserts"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Desserts',
              title: 'DESSERTS',
            })
          }
        />
        <List.Item
          title="Boissons"
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Drinks',
              title: 'BOISSONS',
            })
          }
        />
      </List.Accordion>

      <Divider />

      <List.Item
        title="Contactez-nous"
        onPress={() => handleMenuItemPress('Contactez-nous')}
        style={{ backgroundColor: '#eaeaea' }}
      />
      <List.Item
        title="Nos engagements"
        onPress={() => handleMenuItemPress('Engagements')}
        style={{ backgroundColor: '#eaeaea' }}
      />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <CustomCardRestaurantMenu
          title="Nouveautés"
          src={{
            uri: `${REACT_APP_URL_API}image/badge-nouveautes.webp`,
          }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'News',
              title: 'NOUVEAUTES',
            })
          }
        />
        <CustomCardRestaurantMenu
          title="Menus"
          src={{
            uri: `${REACT_APP_URL_API}image/nouveautes.webp`,
          }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Menus',
              title: 'MENUS',
            })
          }
        />
        <CustomCardRestaurantMenu
          title="Entrées"
          src={{ uri: `${REACT_APP_URL_API}image/entrees.webp` }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Starter',
              title: 'ENTREES',
            })
          }
        />
        <CustomCardRestaurantMenu
          title="Plats"
          src={{ uri: `${REACT_APP_URL_API}image/plats.webp` }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Dishes',
              title: 'PLATS',
            })
          }
        />

        <CustomCardRestaurantMenu
          title="Desserts"
          src={{ uri: `${REACT_APP_URL_API}image/desserts.webp` }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Desserts',
              title: 'DESSERTS',
            })
          }
        />
        <CustomCardRestaurantMenu
          title="Boissons"
          src={{ uri: `${REACT_APP_URL_API}image/boissons.webp` }}
          onPress={() =>
            handleMenuItemPress('ListProducts', {
              name: 'Drinks',
              title: 'BOISSONS',
            })
          }
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 15,
      height: 10,
    },
    shadowOpacity: 0.55,
    shadowRadius: 2,
    elevation: 5,
  },
  titleContainer: {
    backgroundColor: '#5F8D85',
    opacity: 0.8,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cardImage: {
    flexGrow: 1,
  },
  actionsContainer: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: -50,
    left: 0,
    backgroundColor: '#5F8D85',
    opacity: 0.6,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  actionButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 5,
  },
  removeButton: {
    marginRight: 5,
  },
  addButton: {
    marginLeft: 5,
  },
  cartButton: {},
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default MenuList
