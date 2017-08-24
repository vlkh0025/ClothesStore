import React,{Component } from 'React';
import{Image, StyleSheet,View,Text,Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class Collection extends Component{
    render(){
        const {wrapper} = styles;
        return(
            <View style={wrapper}>
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
    wrapper:{

    }
  });