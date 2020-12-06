import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, RefreshControl, TouchableOpacity, Button, Alert } from 'react-native';
import { styles } from "../assets/style";
import Loading from "./Loading";

const getImage = (sex) => {
    let path = sex == 'male' ? require('../assets/boy.png') : require('../assets/girl.png');
    return path;
}

const ContactView = ({ navigation }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadResource();
    }, [])

    const loadResource = async () => {
        try {
            setIsLoad(false);
            setTimeout(() => {
                const { list } = require('../shared/contacts');
                setList(list);
                setIsLoad(true);
            }, 1000);
        } catch (error) {
            setError(true)
        }
    }

    const Item = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <Image style={{ width: 25, height: 25 }} source={getImage(item.sex)} />
                <Text style={{ paddingHorizontal: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const ListItems = ({ list }) => {
        return (
            <FlatList
                data={list}
                renderItem={Item}
                keyExtractor={item => item.id.toString()}
                refreshControl={<RefreshControl refreshing={!isLoad} onRefresh={loadResource} />}
            />
        )
    }

    const NewContact = ({ }) => {
        return (
            <TouchableOpacity style={styles.floatingButton} onPress={() => Alert.alert('Clicked')}>
                <Text style={{ color: '#fff' }}>+</Text>
            </TouchableOpacity>
        )
    }

    if (!error) {
        if (!isLoad) {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={styles.subTitle}>Contact List</Text>
                    <Loading message={'Loading'} size={'small'} />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Text style={styles.subTitle}>Contact List</Text>
                <ListItems list={list} />
                <NewContact />
            </View>
        );
    }
    return (<Text>Error occerd</Text>);
}

export default ContactView;
