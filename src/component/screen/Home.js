
import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, YellowBox, Alert, Toast, Keyboard, TouchableNativeFeedback} from 'react-native';
import { styles } from '../../common/CommonStyle';
import { Container, Content ,Form , Item, Input, Label, Button, Text, } from 'native-base';

const {width, height}  = Dimensions.get('window')
export default class HomeScreen extends Component {
    constructor(props){
        super(props)
        YellowBox.ignoreWarnings(['Remote debugger']);
        
        this.state = {
         userName: "",
         password: "", 
        }
    }
     static navigationOptions = {
        title: 'Home'
     }

     loginBtnAction = () => {

      const data = ["a","b","c","d","e"]
      //console.warn(data)
      for (i in data){
        //  console.warn("value i", i)

      }
     const mapData = data.map(function(item) {
         return "Map- " + item
     })
     //console.warn("return map value", mapData)

     const filterData = data.filter(function(item){
             return item === "b"
     }) 
     //console.warn("return filter value:", filterData)

     const number = [1,5,4,8,3,7,3,]

      const freq = number.reduce(function(result, value){
      console.warn("result is ", result, "value is", value)
        // if(!result[value]){
        //     result[value] = 1
        // } else {
        //     result[value] = result[value] + 1
        // }
         return  result[value]
      }, {})

       console.warn(" hello", freq)

         /*
         this.props.navigation.navigate("Profile")

         const { userName, password } = this.state; 
         if (userName === "") {
             alert("Enter your name")
         } else if (password == ""){
           alert("Enter your password")
         } else{
             this.props.navigation.navigate("Profile")
         } 
         */
     }

    render() {
        return (
         <Container>
            <Content >
                <Form style= {{margin: 12}}>
                    <Item floatingLabel>
                        <Label>User Name</Label>
                            <Input
                                keyboardType = { "default" }
                                onChangeText={(userName) => this.setState({userName})} />
                    </Item>
                    <Item floatingLabel> 
                        <Label>Password</Label>
                            <Input 
                                secureTextEntry = {true}
                                onChangeText = {(password) => this.setState({password})}
                            />
                    </Item>
                </Form>
                   <Button style = {{ marginLeft : 20, marginTop: 30}}
                        onPress = {this.loginBtnAction}>
                   <Text style = {{width: (width - 40), textAlign: 'center'}}>Login</Text>
                   </Button>
            </Content>
        </Container>
        
        );
    }
}

/*
var selectionListData = [
    {
      data = [
            {
               value: 'currentlyReading',
               text: 'Currently Reading'
            },
            {
                value: 'wantToRead',
                text: 'Want to Read'
            },
            {
                value: 'read',
                text: 'Read'
            },
            {
                value: 'none',
                text: 'None'
            }],
       title: "Hi fist row"
   },
   {
    data = [
        {
            value: 'currentlyReading',
            text: 'Currently Reading'
        },
        {
            value: 'wantToRead',
            text: 'Want to Read'
        },
        {
            value: 'read',
            text: 'Read'
        },
        {
            value: 'none',
            text: 'None'
        }],
    title: "Hi fist row"
   },
];
export{selectionListData}
*/