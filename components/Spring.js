import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native'

export const Spring = () => {

    const [ buttonAnimation ] = useState( new Animated.Value(1) )

    const onPressInAnimation = () => {
        Animated.spring( buttonAnimation, {
            useNativeDriver: false,
            toValue: .90,
            tension: 100
        }).start()
    }

    const onPressOutAnimation = () => {
        Animated.spring( buttonAnimation, {
            useNativeDriver: false,
            toValue: 1,
            tension: 100
        }).start()
    }

    const AnimationStyle = {
        transform: [{ scale: buttonAnimation }]
    }

    return (
        <View>
            <Text style={styles.text}>Animación 3: Spring</Text>
            <TouchableWithoutFeedback
                onPressIn={onPressInAnimation}
                onPressOut={onPressOutAnimation}
            >
                <Animated.View style={[styles.button, AnimationStyle]}>
                    <Text style={styles.buttonText}>Boton</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center'
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 15
    },
    buttonText: {
        backgroundColor: '#FFAD48',
        textAlign: 'center',
        paddingVertical: 7,
        fontSize: 18,
        color: '#454545'
    }
})