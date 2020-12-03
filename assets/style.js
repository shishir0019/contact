import { StyleSheet } from "react-native";

const accentColor = '#1e3799';
const primaryColor = '#1e3799';
const secondaryColor = 'lightgrey';

export const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#1e3799',
        color: '#fff'
    },
    main: {
    },
    title: {
        backgroundColor: '#fff',
        color: primaryColor,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    subTitle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#fff',
        backgroundColor: accentColor
    },
    container: {
        backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})