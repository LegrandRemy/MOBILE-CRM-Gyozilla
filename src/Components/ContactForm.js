import { View, TextInput, StyleSheet, screenWidth } from 'react-native'
import React, { useRef } from 'react'
import { Button } from 'native-base'

const ContactForm = ({
  values,
  handleSubmit,
  handleChangeLastname,
  handleChangeEmail,
  handleChangeMessage,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={values.lastname}
          onChangeText={handleChangeLastname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={handleChangeEmail}
        />
      </View>
      <TextInput
        style={styles.inputMultiline}
        multiline
        numberOfLines={5}
        placeholder="Votre message"
        value={values.message}
        onChangeText={handleChangeMessage}
      />
      <Button backgroundColor={'#F8A500'} onPress={() => handleSubmit()}>
        Envoyer
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
  inputRow: {
    justifyContent: 'space-between',
    marginBottom: 50,
    width: '100%',
    // width: screenWidth < 700 ? '100%' : 500,
  },
  input: {
    borderWidth: 1,
    borderColor: '#739B94',
    padding: 10,
    width: '100%',
    height: 50,
    marginVertical: 5,
  },
  inputMultiline: {
    borderWidth: 1,
    borderColor: '#739B94',
    padding: 10,
    width: '100%',
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
})

export default ContactForm
