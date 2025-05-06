import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons'; // Import Expo's built-in icons
import CustomInput from '../../components/auth/CustomInput';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignupPress = () => {
    // Handle navigation to signup screen
    // const ok = alert('Navigate to Signup Screen');
    // if (ok) {
    // Navigate to the signup screen
    navigation.navigate('Signup');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subtext}>
          Enter Your Email / username and Password
        </Text>
      </View>

      <View style={styles.formContainer}>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address or username"
        />

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          isPassword={true}
        />

        {/* Forget Password below the password input */}
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => alert('Forgot Password')}>
            <Text style={styles.forgotPasswordText}>Forget Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={() => setAgreeTerms(!agreeTerms)}>
          <View style={styles.termsContainer}>
            <View
              style={[styles.checkbox, agreeTerms && styles.checkedCheckbox]}
            >
              {agreeTerms && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.termsText}>I agree to Terms & Conditions</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink} onPress={handleSignupPress}>
              Signup
            </Text>
          </Text>
        </View>
      </View>
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
    marginTop: 80,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginBottom: 16,
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
    marginBottom: 24,
    fontWeight: '500',
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
  },
  termsText: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  signupText: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  signupLink: {
    fontFamily: 'Nunito-SemiBold',
    color: '#10B981',
    fontWeight: '600',
  },
});

export default Login;
