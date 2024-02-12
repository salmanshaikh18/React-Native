import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Form valudation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be minimum 4 characters')
  .max(12, 'should be max of 16 characters')
  .required('Length is required')
})

export default function App() {
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})