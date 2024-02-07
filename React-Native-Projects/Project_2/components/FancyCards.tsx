import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://images.unsplash.com/photo-1524473994769-c1bbbf30e944?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>India, Delhi</Text>
            <Text style={styles.cardDescription}>
            The Taj Mahal, located in Agra, India, is an iconic white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'salmon'
    },
    card: {
        height: 300,
        width: 340,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        overflow: 'hidden',
        padding: 10
    },
    cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,

        },
        height: 345
    },
    cardImage: {
        height: 180,
        marginBottom: 10,
        borderRadius: 20
    },
    cardBody: {
        // borderBottomEndRadius: 20,
        // overflow: 'hidden'
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 5
    },
    cardTitle: {
        color: '#000',
        marginBottom: 2,
        fontWeight: 'bold',
        fontSize: 18
    },
    cardLabel: {
        color: '#000',
        marginBottom: 2,
        fontSize: 16,
    },
    cardDescription: {
        color: '#000',
        fontSize: 14,
        marginBottom: 2,
        // flexShrink: 1,
        marginTop: 6
    }
})