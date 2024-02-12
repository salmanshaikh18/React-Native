import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// Form valudation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be minimum 4 characters')
  .max(12, 'should be max of 16 characters')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {

    let characterList = ''
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz' 
    const digitChars = '0123456789'
    const specialChars = '!@#$%^&*()_+'

    if (uppercase) {
      characterList += upperCaseChars
    }

    if (lowerCaseChars) {
      characterList += lowerCaseChars
    }
    
    if (numbers) {
      characterList += digitChars
    }

    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPasswordGenerated(true)

  }

  const createPassword = (characters: string, passwordLength: number) => {

    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }

    return result

  }

  const resetPassword = () => {
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUppercase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})