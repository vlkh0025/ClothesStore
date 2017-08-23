import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import {MyAppDrawer} from './../App';

export default class Menu extends Component{
    render(){
        
        return(
   
        <View style={{flex:1,padding:10}}>  
            <View style={{flex:0.3, backgroundColor:'#00ffff'}}>
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
