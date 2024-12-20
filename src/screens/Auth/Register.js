import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Register() {
     const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

    const handleSubmit = () => {
        
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <>
            <View style={styles.flexContainer}>
                <View style={styles.card}>
                    <View style={{ marginBottom: 40, textAlign: '' }}>
                        <Text style={styles.text}>Let's Get</Text>
                        <Text style={styles.text}>Started With Postify</Text>
                    </View>
                    {/* Name Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Full Name"
                        value={email}
                        onChangeText={setEmail} 
                        keyboardType="ascii-capable" 
                    />
                    {/* Email Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail} 
                        keyboardType="email-address" 
                    />

                    {/* Password Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword} 
                        secureTextEntry={true} 
                    />

                    {/* Custom Button using TouchableOpacity */}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontSize: 30,
        fontWeight: 600,
        fontFamily: "Roboto"

    },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 30,
        paddingVertical: 40,
        borderRadius: 15,

    },
    input: {
        height: 45,
        width: 290,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 16
    },
    button: {
        marginTop: 10,
        backgroundColor: '#ac1e5f', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
})


