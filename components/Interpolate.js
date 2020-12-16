import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'

export const Interpolate = () => {

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

    const interpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 300]
    })

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Animación 2: Interpolate</Text>
            <Animated.View style={{height: 50, width: interpolation, backgroundColor: '#FFAD48', marginVertical: 10}}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
})