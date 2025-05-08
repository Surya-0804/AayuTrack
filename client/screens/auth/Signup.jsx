import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/auth/CustomInput';
import { signupFields } from '../../constants/signupField';
import { registerUser } from '../../api/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: '',
    gender: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { password, confirmPassword, ...rest } = formData;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      const payload = { ...rest, password }; // remove confirmPassword
      console.log('Form data (cleaned):', payload);

      const response = await registerUser(payload);
      console.log('User registered:', response);

      await AsyncStorage.setItem('token', response.token);
      alert('User registered successfully!');
      // navigation.replace('Home');
    } catch (error) {
      console.error(
        'Registration failed:',
        error?.response?.data?.message || error.message
      );
      alert(error?.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperContainer}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
          <Text style={styles.header}>Create an Account</Text>
          <Text style={styles.subtext}>
            Enter your details and continue to create account
          </Text>
        </View>

        <View style={styles.formContainer}>
          {signupFields.map((field) => {
            return (
              <CustomInput
                key={field.name}
                //   label={field.label}
                keyboardType={field.keyboardType}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChangeText={(text) => handleInputChange(field.name, text)}
                secureTextEntry={field.secureTextEntry}
                autoCapitalize={field.autoCapitalize}
                options={field.options}
                isPassword={
                  field.name === 'password' || field.name === 'confirmPassword'
                }
              />
            );
          })}

          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  header: {
    fontFamily: 'Nunito-Bold',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtext: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  signupButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  loginText: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#666666',
    marginRight: 4,
  },
  loginLink: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: '#10B981',
    fontWeight: '700',
  },
});

export default Signup;
