import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Dimensions } from 'react-native';

export default function Loading({ color = 'black', message = '', backgroundColor = '#fff', size = 'large' }) {

    const styles = StyleSheet.create({
        text: {
            color: color,
            padding: 10
        },
        loading: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor,
        }
    });

    return (
        <View style={styles.loading}>
            <Text style={styles.text}>{message}</Text>
            <ActivityIndicator size={size} color={color}></ActivityIndicator>
        </View>
    )
}