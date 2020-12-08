import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "../assets/style";
import Loading from "./Loading";

const NewContact = ({ natigator, route }) => {
    const [contact, setContact] = useState({
        first_name: '',
        last_name: '',
        job: '',
        phone: '',
        mobile: '',
        email: '',
        address: '',
        note: '',
    });
    const save = () => {
        if (contact.first_name && (contact.phone || contact.mobile)) {
            console.log(contact);
        } else {
            if (!contact.first_name) {
                console.log('Name error');
            }
            if (!contact.mobile || !contact.phone) {
                console.log('Number error');
            }
        }
    }

    return (
        <View style={styles.form}>
            <TextInput style={styles.formInput} onChangeText={text => contact.first_name = text} placeholder={"First name"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.last_name = text} placeholder={"last name"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.job = text} placeholder={"Job"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.phone = text} placeholder={"Phone"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.mobile = text} placeholder={"Mobile"} dataDetectorTypes={'phoneNumber'} />
            <TextInput style={styles.formInput} onChangeText={text => contact.email = text} placeholder={"Email"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.address = text} placeholder={"Address"} />
            <TextInput style={styles.formInput} onChangeText={text => contact.note = text} placeholder={"Note"} />
            <TouchableOpacity style={styles.formSubmit} onPress={() => save()}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NewContact;
