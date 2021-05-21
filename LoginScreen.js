import React from "react";

import {View, Text, StyleSheet, TextInput, TouchBarOpacity, TouchableOpacity} from "react-native";
/* import * as firebase from "firebase" */ /*тут другое, что=то вроде firebase/auth*/



export default class LoginScreen extends React.Component {
    state = {
        email:"",
        password:"",
        errorMessage:null
    };

    handleLogin = () => {
        const {email, password} = this.state

        /*firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))*/
    }




/*первый вью закроется внизу*/ 
    render() {
        return (
            <View style = {styles.container}> 
                <Text style = {styles.greeting} >
                    {'Hello again.\nWelcome back.'}
                </Text>

            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage} </Text>}
            </View>

            <View style = {styles.form}>
                <View>
                    <Text style = {styles.inputTitle}> Email Adress </Text>
                    <Textinput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={email=>this.setState({email})}
                        value={this.state.email}
                    ></Textinput>
                </View>

            <View style = {{marginTop: 32 }}>
                <Text style= {styles.inputTitle}> Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState ({ password })}
                    value = {this.state.password}
                ></TextInput>
            </View>
        </View>

        <TouchableOpacity style = {styles.button}    >
            <Text style={{color: "#FFF", fontWeight: "500"}}> SignIn </Text>
        </TouchableOpacity>
            
        <TouchableOpacity style = {{alignSelf: "center", marginTop:32 }}>
            <Text style = {{color: "#414959", fontSize: 13 }}>
                New to app? <Text style = {{fontWeight: "500", color: "#E9446A"}}> SignUp </Text>
            </Text>
        </TouchableOpacity>
      </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
        
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    }
});
