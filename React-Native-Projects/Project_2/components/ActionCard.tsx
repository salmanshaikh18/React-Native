import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const openWebsite = (website: string) => {
        Linking.openURL(website);
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard, ]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image 
            source={{
                uri: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>
            JavaScript is a versatile, high-level programming language commonly used for both front-end and back-end web development, known for its flexibility and dynamic nature.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => {
                openWebsite('https://www.google.com')
            }}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                openWebsite('https://www.instagram.com')
            }}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {

    },
    card: {

    },
    elevatedCard: {

    },
    headingContainer: {

    },
    headerText: {

    },
    cardImage: {
        height: 200,
        width: 360
    },
    bodyContainer: {

    },
    footerContainer: {

    },
    socialLinks: {
        
    }
})