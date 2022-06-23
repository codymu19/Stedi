import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const sendText = async (phoneNumber) => {
  // using fetch do a Post to http://dev.stedi.me/twofactorlogin/###-###-####
  await fetch('https://dev.stedi.me/twofactorlogin/'+ phoneNumber, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    },
  })
  console.log("Phone Number:",phoneNumber);

};

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OneTimePassword, setOneTimePassword] = useState(null);
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);?

  return (
    <SafeAreaView style={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="(801) 555-1212"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={OneTimePassword}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
        <TouchableOpacity
          style={buttonStyle.button}
          // onPress={onPress}
          // onPress={()=>{console.log('Login button was clicked')}}
          onPress={()=>{sendText(phoneNumber)}}
        >
          <Text style={buttonStyle.text}>Send Text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyle.button}
          // onPress={onPress}
          onPress={()=>{console.log('Login button was clicked')}}
          // onPress={()=>{sendText(phoneNumber)}}
        >
          <Text style={buttonStyle.text}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
    margin: 30,
    marginTop: 250,
    // justifyContent: "center",
    justifyItems: "center",
  }
});

const buttonStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    padding: 20
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    backgroundColor: "#6BDB4F",
    padding: 10,
    margin: 5,
    marginRight: 70,
    marginLeft: 70
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 30,

  }
});


export default Login;