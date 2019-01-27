import React, { Component } from 'react';
import { Keyboard, Text, View, TextInput, Alert, TouchableWithoutFeedback, Image, KeyboardAvoidingView, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class CountScreen extends Component {

    static navigationOptions = {
        title: 'Monitor',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="dashboard" type="font-awesome" size={25} color={tintColor} />;
        }
    }

    constructor(props) {
        super(props);
    
        this.state = {
            errorMessage: '',
            count: 0,
            peopleIn: 150,
            totalSeats: 250,
            isAuthenticating: false
        }
    }

    componentDidMount() {
        this.onRefreshPress();
    }

    onRefreshPress = () => {
        const url = `https://mighty-hollows-23016.herokuapp.com/cc/getAllBooksCount`;
        this.setState({ isAuthenticating: true });

      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            //data: res.results,
            count: res.count,
            error: res.error || null,
            isAuthenticating: false,
          });
      //this.arrayHolder = res.results;
        })
      .catch(error => {
      this.setState({ error, isAuthenticating: false });
      });
    };

    renderLibraryStatus = () => {
        if (this.state.peopleIn>this.state.totalSeats) {
            return(
                <View style={styles.logoStatusView}>
                    <Text style={{fontSize:20, fontWeight:'500'}}>Reading Hall is </Text>
                    <Text style={{fontSize:30, color:'red', fontWeight:'700'}}>Over Crowded</Text>
                </View>
            );
        } else {
            if (this.state.peopleIn/this.state.totalSeats>0.9) {
                return(
                    <View style={styles.logoStatusView}>
                        <Text style={{fontSize:20, fontWeight:'500'}}>Reading Hall is </Text>
                        <Text style={{fontSize:30, color:'#D32F2F', fontWeight:'700'}}>Almost Full</Text>
                    </View>
                ); 
            } else if (this.state.peopleIn/this.state.totalSeats>0.75&&this.state.peopleIn/this.state.totalSeats<=0.9) {
                return(
                    <View style={styles.logoStatusView}>
                        <Text style={{fontSize:20, fontWeight:'500'}}>Reading Hall is </Text>
                        <Text style={{fontSize:30, color:'#FF5252', fontWeight:'700'}}>Crowded</Text>
                    </View>
                ); 
            } else if (this.state.peopleIn/this.state.totalSeats<=0.75&&this.state.peopleIn/this.state.totalSeats>0.35) {
                return(
                    <View style={styles.logoStatusView}>
                        <Text style={{fontSize:20, fontWeight:'500'}}>Reading Hall is </Text>
                        <Text style={{fontSize:30, color:'#4CAF50', fontWeight:'700'}}>Fairly Vacant</Text>
                    </View>
                ); 
            } else {
                return(
                    <View style={styles.logoStatusView}>
                        <Text style={{fontSize:20, fontWeight:'500'}}>Reading Hall is </Text>
                        <Text style={{fontSize:30, color:'green', fontWeight:'700'}}>Vacant</Text>
                    </View>
                ); 
            }
        }   
    }

    renderVacancies = () => {
        if (this.state.totalSeats-this.state.peopleIn<0) {
            return(
                <View style={styles.logoImageView}>
                    <Text style={{fontSize:80}}>0</Text>
                </View>
            );
        } else {
            return(
                <View style={styles.logoImageView}>
                    <Text style={{fontSize:80}}>{this.state.totalSeats-this.state.peopleIn}</Text>
                </View>
            );
        }
    }

    render() {
        return (
          <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <StatusBar barStyle = "dark-content" hidden = {true} translucent = {true}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.containerView}>
                    <View style={styles.loginFormView}>

                        {this.renderLibraryStatus()}

                        {this.renderVacancies()}
                        <Text style={styles.infoText}>Available Seats</Text>

                        <View style={styles.logoImageView}>
                            <Text style={{fontSize:80}}>{this.state.peopleIn}</Text>
                        </View>
                        <Text style={styles.infoText}>People Studying In</Text>

                        <ActivityIndicator style={{marginTop: 10}} animating={this.state.isAuthenticating} />
                        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                        <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => this.onRefreshPress()}
                            title="Refresh Count"
                            ViewComponent={require('expo').LinearGradient}
                            linearGradientProps={{
                                colors: ['#FFE082'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }}
                        />
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
        borderWidth: 3,
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 10,
        marginTop: 30,
        borderColor: '#F98000'
    },
    logoStatusView: { 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginBottom: 10,
        marginTop: 30,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginBottom: 30,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 20,
        fontWeight: "200",
        textAlign: 'center',
        color:'#F88000'
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
        backgroundColor: '#FF5722',
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

  export default CountScreen;
