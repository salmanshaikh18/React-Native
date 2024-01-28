import React from 'react'

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function MyApp() {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView>
            <View style={isDarkMode ? styles.lightMode : styles.darkMode}>
                <Text style={styles.text}>Hello World</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'salmon',
        textAlign: 'center',
    },
    darkMode: {
        backgroundColor: '#555',
        color: '#fff'
    },
    lightMode: {
        backgroundColor: '#fff',
        color: '#555'
    }
})

export default MyApp