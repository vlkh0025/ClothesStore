import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {MyAppDrawer} from './../App';

var {height, width} = Dimensions.get('window');
export default class Menu extends Component{
    render(){
        
        return(
   
        <View style={{width:width/1.5,marginVertical:10,padding:10}}>  
            <View style={{height:height*0.4,backgroundColor:'#00ffff', padding:10, justifyContent:'center', alignItems:'center'}}>
                <Image style ={{marginBottom:10,borderRadius: width*0.25,width:width*0.5, height:width*0.5}}source={require('./../image/linh.png')}/>
                <Text style ={{fontSize:18, fontWeight:'bold'}}>Nhat Linh</Text>
            </View>      
            <View style={{padding:5}}>
               <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=> this.props.navigation.navigate('Home')}>
                <Image style={styles.icon}
                    source={require('./../image/home.png')}
                    />
                    <Text style ={{fontSize:18, fontWeight:'bold', marginHorizontal:10,marginVertical:3}}>home</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:5}}>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=> this.props.navigation.navigate('SaleOf')}>
                <Image style={styles.icon}
                    source={require('./../image/saleOf.png')}
                    />
                    <Text style ={{fontSize:18, fontWeight:'bold', marginHorizontal:10,marginVertical:3}}>Sale Of</Text>
                </TouchableOpacity>
            </View>   
            <View style={{padding:5}}>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=> this.props.navigation.navigate('Change_Info')}>
                <Image style={styles.icon}
                    source={require('./../image/info.png')}
                    />
                    <Text style ={{fontSize:18, fontWeight:'bold', marginHorizontal:10,marginVertical:3}}>Change Information</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:5}}>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=> this.props.navigation.navigate('History_Oder')}>
                <Image style={styles.icon}
                    source={require('./../image/history.png')}
                    />
                    <Text style ={{fontSize:18, fontWeight:'bold', marginHorizontal:10,marginVertical:3}}>History Oder</Text>
                </TouchableOpacity>
            </View> 
        </View>
        
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
  });
