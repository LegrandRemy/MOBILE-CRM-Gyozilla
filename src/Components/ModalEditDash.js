
import React, { useState } from 'react'
import { Button, Input, Modal, TextArea } from "native-base";
import { Text, TextInput } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { addProduct } from '../utils/api-call/addProduct';
import { View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const ModalEditDash = ({visible, closeModal, add}) => {
    const chooseFile = async ()=>{
        try {
            const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            });
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            console.log('Sélection de fichier annulée');
            } else {
            console.log('Erreur lors de la sélection du fichier :', err);
            }
        }
    }

    const validationSchema = yup.object().shape({
        productName: yup.string().required('Le nom du produit est obligatoire'),
        productDescription: yup.string().required('La description du produit est obligatoire'),
        productImage: yup.string().required('L\'image du produit est obligatoire'),
        productPrice: yup.number().required('Le prix du produit est obligatoire'),
        productSteps: yup.string().required('Les étapes de création du produit sont obligatoires'),
        productCategory: yup.number().required('La catégorie du produit est obligatoire'),
        productMenu: yup.number().required('Le menu du produit est obligatoire'),
    })

    return (
        <Modal animationPreset='slide' isOpen={visible} onClose={closeModal}>
            <Modal.Content style={{width:'90%'}}>
            <Modal.CloseButton onPress={closeModal} />
            <Modal.Header>Ajouter un produit</Modal.Header>
            <Modal.Body>
                <Formik
                initialValues={{ 
                    productName: '', 
                    productDescription: '',
                    productImage: '',
                    productPrice: '',
                    productSteps: '',
                    productCategory: '',
                    productMenu: '',
                    }}
                validationSchema={validationSchema}
                onSubmit={ (values)=>{
                        addProduct(values)
                        .then((res)=>{
                            console.log(res);
                        })
                        .catch((err)=>{
                            console.log(err);
                        })
                        
                }}
                >
                {({ handleChange, handleBlur, values, errors, touched, handleSubmit, isSubmitting}) => 
                {
                return (<View>
                    <Input
                        type='text'
                        margin={2}
                        variant={'outline'}
                        placeholder="Nom du produit"
                        onChangeText={handleChange('productName')}
                        onBlur={handleBlur('productName')}
                        value={values.productName}
                        errors={touched.productDescription && errors.productDescription}
                    />
                    {errors.productName ? <Text>{errors.productName}</Text>: ''}
                    <TextArea
                        margin={2}
                        placeholder="Description du produit"
                        onChangeText={handleChange('productDescription')}
                        onBlur={handleBlur('productDescription')}
                        value={values.productDescription}
                        errors={touched.productDescription && errors.productDescription}
                    />
                    {errors.productDescription ? <Text>{errors.productDescription}</Text>: ''}
                    <Button title="Choisir un fichier" onPress={chooseFile}>Choisir un fichier</Button>
                    <Input
                        value={values.productImage}
                        placeholder="Chemin du fichier"
                        
                    />
                    {errors.productImage ? <Text>{errors.productImage}</Text>: ''}
                    <Input
                        margin={2}
                        variant={'outline'}
                        placeholder="Nom du produit"
                        onChangeText={handleChange('productName')}
                        onBlur={handleBlur('productName')}
                        value={values.productName}
                    />
                    {errors.productName ? <Text>{errors.productName}</Text>: ''}
                    <Input
                        margin={2}
                        variant={'outline'}
                        placeholder="Prix du produit"
                        onChangeText={handleChange('productPrice')}
                        onBlur={handleBlur('productPrice')}
                        value={values.productPrice}
                        errors={touched.productPrice && errors.productPrice}
                    />
                    {errors.productPrice ? <Text>{errors.productPrice}</Text>: ''}
                    
                    <Modal.Footer>
                    <Button marginRight={2} title="Ajouter" onPress={()=>handleSubmit()} isLoading={isSubmitting}>Ajouter</Button>
                    <Button title="Annuler" onPress={closeModal}>Annuler</Button>
                    </Modal.Footer>
                    </View>)}
                }
                </Formik>
            </Modal.Body>

        </Modal.Content>
        </Modal>
    );

}

export default ModalEditDash