import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'

export const Timing = () => {

    const [ animation ] = useState( new Animated.Value(0) )

    useEffect(() => {
        Animated.timing(
            animation, {
                toValue: 1,
                useNativeDriver: false,
                duration: 1000
            }
        ).start()
    }, [])

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Animación 1: Timing</Text>
            <Animated.View style={{height: 50, width: 50, backgroundColor: '#FFAD48', marginVertical: 10, opacity: animation}}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
})


