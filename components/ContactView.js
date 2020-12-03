import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Modal, Alert, RefreshControl, Dimensions, TouchableOpacity, Button } from 'react-native';
import { styles } from "../assets/style";
import Loading from "./Loading";

const getImage = (sex) => {
    let path = sex == 'male' ? require('../assets/boy.png') : require('../assets/girl.png');
    return path;
}

const ContactView = () => {
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
            }, 2000);
        } catch (error) {
            setError(true)
        }
    }

    const Item = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item}>
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

    const GridItems = ({ list }) => {
        return (
            <View>

            </View>
        )
    }
    if (!error) {
        if (!isLoad) {
            return (
                <View style={{ height: Math.round(Dimensions.get('window').height) - 100 }}>
                    <Text style={styles.subTitle}>Contact List</Text>
                    <Loading message={'Loading'} size={'small'} />
                </View>
            );
        }
        return (
            <View>
                <Text style={styles.subTitle}>Contact List</Text>
                <ListItems list={list} />
            </View>
        );
    }
    return (<Text>Error occerd</Text>);
}

export default ContactView;
