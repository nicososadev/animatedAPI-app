import React from 'react'
import { Text, StyleSheet, Platform} from 'react-native'

export const Header = () => {
    
    return (
        <Text style={styles.header}>Animated API</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        backgroundColor: '#FB991C',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#454545'
    }
})