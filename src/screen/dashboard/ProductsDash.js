import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import { getAllProducts } from '../../utils/api-call/getAllProducts';
import {Icon} from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, FlatList, Image, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deleteProductById } from '../../utils/api-call/deleteProductById';
import ModalEditDash from '../../components/ModalEditDash';

const ProductsDash = () => {
  const [modalVisible,setModalVisible] = useState(false)
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([9,15,20]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  
  const openModal = ()=>{
    setModalVisible(true)
  }

  const closeModal = ()=>{
    setModalVisible(false)
  }

  const [products, setProducts] = useState();

  const handlePress = (id)=>{
    navigation.navigate('CrudProduct', {id: id});
  }

  useEffect(()=>{
    getAllProducts()
    .then((res)=>{
      if (res.status === 200) {
        setProducts(res.data)
      }
    })
  }, [])



  const handleDelete = (id)=>{
    try {
      deleteProductById(id)
      .then((res)=>{
        if (res.status === 200) {
          const updatedProducts = products.filter((item) => item.id !== id);
          setProducts(updatedProducts);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const alertDelete = (id)=>{
    Alert.alert('Supression du produit', 'Voulez-vous vraiment ce produit ?', [
      {
        text: 'Annuler',
        style: 'cancel',
      },
      {
        text: 'Oui',
        onPress: () => handleDelete(id)
      },
    ])
  }

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, products?.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView>
      <ModalEditDash
      visible={modalVisible}
      closeModal={closeModal}
      />
      <View style={{width: '100%', alignItems: 'flex-end'}}>
      <Icon 
      onPress={()=>openModal()}
      as={MaterialCommunityIcons} 
      name="plus" size={"xl"} 
      color="black" 
      marginTop={4} 
      marginRight={4} />
      </View>
      
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{justifyContent:'center'}}>Libellé</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}}>Catégorie</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}}>Prix</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}}>Modifier</DataTable.Title>
          <DataTable.Title style={{justifyContent:'center'}}>Supprimer</DataTable.Title>
        </DataTable.Header>
        {products?.slice(from, to).map((item) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell style={{justifyContent:'center'}}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}}>{item.productCategory.name}</DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}} numeric>{item.price}€</DataTable.Cell>
              <DataTable.Cell 
              style={{justifyContent:'center'}}
              onPress={()=>handlePress(item.id)}>
                <Icon as={MaterialCommunityIcons} name="pencil" size={"md"} color="black" />
              </DataTable.Cell>
              <DataTable.Cell 
              style={{justifyContent:'center'}}
              onPress={()=>alertDelete(item.id)}>
                <Icon as={MaterialCommunityIcons} name="delete" size={"md"} color="black" />
              </DataTable.Cell>
            </DataTable.Row>
        ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(products?.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${products?.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Produits par page'}
      />
      </DataTable>
    </ScrollView>
    
  );
}

export default ProductsDash
