import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Button } from 'native-base'
import { Formik } from 'formik'
import ContactForm from '../components/ContactForm'
const screenWidth = Dimensions.get('window').width

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Une question ? Une remarque ?</Text>
        <Text style={styles.subtitle}>
          Joignez-nous tout type de demande via le formulaire ci-dessous.
        </Text>
        {/* <Image source={logo} style={styles.logo} /> */}
      </View>
      <Formik
        enableReinitialize
        initialValues={{
          lastname: '',
          email: '',
          message: '',
        }}
        onSubmit={(values) => {
          console.log(values)
          sendMail(values)
        }}
      >
        {({ values, handleSubmit, handleChange }) => {
          return (
            <ContactForm
              values={values}
              handleSubmit={handleSubmit}
              handleChangeLastname={handleChange('lastname')}
              handleChangeEmail={handleChange('email')}
              handleChangeMessage={handleChange('message')}
            ></ContactForm>
          )
        }}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#F8A500',
  },
  subtitle: {
    color: '#739B94',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //   inputContainer: {
  //     width: '90%',
  //     alignItems: 'center',
  //   },
  //   inputRow: {
  //     justifyContent: 'space-between',
  //     marginBottom: 50,
  //     width: screenWidth < 700 ? '100%' : 500,
  //   },
  //   input: {
  //     borderWidth: 1,
  //     borderColor: '#739B94',
  //     padding: 10,
  //     width: '100%',
  //     height: 50,
  //     marginVertical: 5,
  //   },
  //   inputMultiline: {
  //     borderWidth: 1,
  //     borderColor: '#739B94',
  //     padding: 10,
  //     width: '100%',
  //     height: 150,
  //     textAlignVertical: 'top',
  //     marginBottom: 20,
  //   },
})

export default Contact
