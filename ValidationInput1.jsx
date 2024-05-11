import React, {useState} from 'react';
import { TextInput, Button, View, Text } from 'react-native';

const EmailValidation = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (input) => {
        // Regex email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleEmailChange = (input) => {
        setEmail(input);
        setIsValidEmail(validateEmail(input));
    };

    const handleSubmit = () => {
        if(isValidEmail) {
            console.log('Email is valid', email);
        } else {
            console.log('Invalid email: ', email);
        }
    };
    return(
        <View>
            <TextInput
                placeholder="Input email here"
                onChangeText={handleEmailChange}
                value={email}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}/>
            {!isValidEmail && <Text style={{color: 'blue'}}>Invalid email address</Text>}
            <Button title="Submit" onPress={handleSubmit} disabled={!isValidEmail}/>
        </View>
    );
};
export default EmailValidation;