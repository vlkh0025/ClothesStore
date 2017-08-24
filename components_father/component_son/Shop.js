import React,{Component } from 'React';
import{Image, StyleSheet,View,Text} from 'react-native';

export default class Shop extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#d2d2d2'}}>
              <Text>SHop linh</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
  });