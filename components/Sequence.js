import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'

export const Sequence = () => {

    const [ animation1 ] = useState( new Animated.Value(-15) )
    const [ animation2 ] = useState( new Animated.Value(-30) )

    useEffect(() => {
        Animated.sequence([
            Animated.timing( animation1, {
                toValue: 15,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing( animation2, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing( animation1, {
                toValue: -15,
                duration: 500,
                useNativeDriver: false
            }),
            Animated.timing( animation2, {
                toValue: -30,
                duration: 500,
                useNativeDriver: false
            }),
        ]).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateX: animation1 },
            { translateY: animation2 }
        ]
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.text}>Animación 4: Sequence</Text>
            <Animated.View style={[ styles.box, animationStyle ]}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30
    },
    box: {
        height: 10,
        width: 10,
        backgroundColor: '#FFAD48',
        marginVertical: 10
    }
})
