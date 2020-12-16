import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Timing } from './components/Timing';
import { Header } from './components/Header';
import { Interpolate } from './components/Interpolate';
import { Spring } from './components/Spring';
import { Sequence } from './components/Sequence';
import { Loop } from './components/Loop';

const App = () => {

    return (
        <View>
            <Header />
            <ScrollView style={styles.content}>

                <View style={styles.animation}>
                    <Timing />
                </View>
                <View style={styles.animation}>
                    <Interpolate />
                </View>
                <View style={styles.animation}>
                    <Spring />
                </View>
                <View style={styles.animation}>
                    <Sequence />
                </View>
                <View style={styles.animation}>
                    <Loop />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        marginBottom: 50
    },
    animation: {
        marginHorizontal: '4%',
        marginVertical: 10,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: '#FFEAD0'
    }
});

export default App;
