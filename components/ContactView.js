import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable, Alert, ActivityIndicator } from 'react-native';

const getImage = (sex) => {
    let path = sex == 'male' ? require('../assets/boy.png') : require('../assets/girl.png');
    return path;
}

const click = (item) => {
    Alert.alert(item.name);
}

const Item = ({ item }) => {
    return (
        <Pressable style={styles.item} onPress={() => Alert.alert(item.name)} android_ripple={{ color: 'grey', borderless: false, radius: 50 }}>
            <Image style={{ width: 25, height: 25 }} source={getImage(item.sex)} />
            <Text style={{ paddingHorizontal: 5 }}>{item.name}</Text>
        </Pressable>
    )
}


const ListItems = ({ list }) => {
    return (
        <FlatList
            data={list}
            renderItem={Item}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const GridItems = ({ list }) => {
    return (
        <View>

        </View>
    )
}

const ContactView = () => {
    const [isLoad, setIsLoad] = useState(false);
    const [list, setList] = useState([]);
    useEffect(() => {
        setIsLoad(false);
        setTimeout(() => {
            const { list } = require('../shared/contacts');
            setList(list);
            setIsLoad(true);
        }, 3000);
    }, [])

    if (!isLoad) {
        return (
            <View>
                <Text style={{ paddingHorizontal: 10, paddingVertical: 5, color: 'blue', backgroundColor: '#eaeaea' }}>Contact List</Text>
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={{ paddingHorizontal: 10, paddingVertical: 5, color: 'blue', backgroundColor: '#eaeaea' }}>Contact List</Text>
            {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} /> */}
            <ListItems list={list} />
        </View>
    )

}

export default ContactView;

const styles = StyleSheet.create({
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
});
