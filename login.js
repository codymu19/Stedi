import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const sendText = async (phoneNumber) => {
  // using fetch do a Post to http://dev.stedi.me/twofactorlogin/###-###-####
  const loginResponse = await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
  const loginResponseText = await loginResponse.text();
  console.log('Login Response',loginResponseText);

};

const getToken = async({phoneNumber,oneTimePassword, setUserLoggedIn}) =>{
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    // body:JSON.stringify({phoneNumber, oneTimePassword}),
    headers:{
      'content-type':'application/text'
    }
  });
  console.log("oneTimePassword:", oneTimePassword)
  console.log("PhoneNumber:", phoneNumber)
  const responseCode = tokenResponse.status;
  console.log("Response Status Code", responseCode)
  if(responseCode==500){
    setUserLoggedIn(true);
  }
  const tokenResponseString = await tokenResponse.text();
}

// await fetch('https://dev.stedi.me/twofactorlogin/'+ phoneNumber, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/text'
//     },
//   })
//   console.log("Phone Number:",phoneNumber);

// };

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);
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
        value={oneTimePassword}
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
          onPress={()=>{
            getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn});
        }}
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