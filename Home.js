import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

// const validateToken = () => {
//   let tokenEmail="";
//   $.ajax({
//      type: 'GET',
//       url: 'https://dev.stedi.me/validate/'+usertoken,
//       success: function(data){
//          if (data==""){
//            window.location="/"
//          } else{
//            $('#email').html(data);
//          }
//       },//token is no longer valid (1 hour expiration), they need to log in
//       contentType: "application/text",
//       dataType: 'text' })

//   return tokenEmail;
// }


const Home = () => {
  return (
    <View>
      <Bar loggedInUser='y4fill@gmail.com' />
      <Icons />
    </View>
  );
};

export default Home;  
