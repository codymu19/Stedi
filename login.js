import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OneTimePassword, setOneTimePassword] = useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

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
          onPress={onPress}
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
    margin: "auto",
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
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
  // text: {
  //   zIndex: 5,
  //   // backgroundColor: "#000000",
  //   fontSize: 20,
  //   padding: 50
  // }
});


export default Login;