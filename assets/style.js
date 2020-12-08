import { StyleSheet } from "react-native";

export const accentColor = '#1e3799';
export const primaryColor = '#1e3799';
export const secondaryColor = 'lightgrey';

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
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fff',
        backgroundColor: accentColor
    },
    container: {
        backgroundColor: '#fff',
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButton: {
        position: 'fixed',
        bottom: 10,
        right: 20,
        zIndex: 20,
        backgroundColor: 'green',
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        padding: 15,
    },
    formInput: {
        borderWidth: 2,
        // borderColor: 'red',
        borderRadius: 5,
        marginVertical: 10,
        padding: 10
    },
    formSubmit: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        marginVertical: 15
    }
})