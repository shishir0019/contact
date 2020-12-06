import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from "../assets/style";
import Loading from "./Loading";

const ContactDetail = ({ natigator, route }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [contact, setContact] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadResource();
    }, [])

    const loadResource = async () => {
        try {
            setIsLoad(false);
            setTimeout(() => {
                const { list } = require('../shared/contacts');
                const { id } = route.params;
                const contact = list.filter(item => item.id == id)[0]
                setContact(contact);
                setIsLoad(true);
            }, 500);
        } catch (error) {
            setError(true)
        }
    }

    if (!error) {
        if (!isLoad) {
            return (
                <View style={{ height: Math.round(Dimensions.get('window').height) - 100 }}>
                    <Loading message={'Loading'} size={'small'} />
                </View>
            );
        }
        return (
            <View>
                <Text>{contact.name}</Text>
            </View>
        );
    }
    return (<Text>Error occerd</Text>);
}

export default ContactDetail;
