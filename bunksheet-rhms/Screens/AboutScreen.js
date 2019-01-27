import React, { Component } from 'react';
import { Keyboard, Text, View, Linking, TextInput, Alert, TouchableWithoutFeedback, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class AboutScreen extends Component {

    static navigationOptions = {
        title: 'About',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="info" type="font-awesome" size={25} color={tintColor} />;
        }
    }

    constructor(props) {
        super(props);
    
        this.state = {
        }
    }

    render() {
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerView}>
                    <View style={[styles.loginFormView]}>
                        <View style={styles.logoImageView}>
                            <Image 
                                style={styles.logoImage}
                                source={require('../assets/icon.png')}
                            />
                        </View>
                        <Text style={styles.logoText}>BunkSheet</Text>
                        <Text style={styles.subLineText}>College Life Made Easy!</Text>
                        
                        <View style={{marginTop: 60}}>
                            <Text style={styles.Text}>Cool Features Coming Soon ...</Text>
                            <Text style={styles.Text}>Stay Tuned!</Text>
                        </View>

                        <View style={{marginTop: 60}}>
                            <Text style={[styles.info]}>Wanna Join the Force?</Text>
                            <Text style={[styles.info, {fontSize: 14}]}>If you have cool ideas, we are eager to hear you!</Text>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL(
                                'http://api.whatsapp.com/send?phone=91' + 8668462386
                                );
                            }} style={{flexDirection: 'row', marginLeft: 30, marginTop: 5}}>
                            <Icon name="whatsapp" type="font-awesome" color={'#4AC959'} size={18} style={{marginLeft: 5}}/> 
                            <Text style={[styles.info, {color: '#4AC959', marginLeft: 5}]}>Team BunkSheet: +91 - 8668462386</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        );
    }
}
const styles = {
    containerView: {
        flex: 1,
    },
    logoImageView: { 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 5,
        textAlign: 'center',
    },
    subLineText: {
        fontSize: 25,
        fontWeight: "600",
        marginBottom: 30,
        textAlign: 'center',
        color: '#616161'
    },
    Text: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#FA9800'
    },
    info: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 0,
        textAlign: 'center',
        color: '#999999'
    },
    logoImage: {
        marginTop: 10,
    },
    loginFormView: {
        justifyContent: 'center',
        flex: 1,
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#777777',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: '#FF6D00',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    signUpButton: {
        backgroundColor: '#FFAB00',
        borderRadius: 5,
        height: 45,
        marginLeft: 15,
        marginRight: 15,
    },
    rectangle: {
        width: 'auto',
        height: 1,
        backgroundColor: 'blue',
        marginTop: 30,
        marginLeft: 120,
        marginRight: 120,
        marginBottom: 30
    }
    
  };

  const mapStateToProps = (state) => {
      return {
          email: state.auth.email,
          password: state.auth.password,
          emailTouched: state.auth.emailTouched,
          passwordTouched: state.auth.passwordTouched,
      }
  }

  export default AboutScreen;
