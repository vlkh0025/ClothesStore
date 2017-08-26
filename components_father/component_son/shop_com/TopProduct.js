import React,{Component} from 'react';
import {Image, StyleSheet,View,Text,Dimensions} from 'react-native';

export default class TopProduct extends Component{
    render(){
        const {container, titleContainer, title, body, image, productContainer,textPrice, textName} = styles;
        return(           
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <View style ={productContainer}>
                        <Image style={image} source={require('./../../../image/hoddie2.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>Price</Text>
                    </View>
                    <View style ={productContainer}>
                        <Image style={image} source={require('./../../../image/aothun1.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>Price</Text>
                    </View>
                </View>
            </View>
        );
    }
}
var {height, width} = Dimensions.get('window');
var imageWidth = (width/2)-30;
var imageHeight = height*0.3 - 20 ;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#d9d9d9',
        margin:10,
        shadowColor:'#404040',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        
    },
    titleContainer:{
        height:40,
        justifyContent:'center',
        paddingLeft:10,
        
    },
    title:{
        fontSize:20,
    },
    body:{
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    productContainer:{
        width:imageWidth,
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        
    },
    image:{
        height:imageHeight,
        width:imageWidth
    },
    textPrice:{
        paddingLeft:10,
        fontFamily:'Avenir',
    },
    textName:{
        paddingLeft:10,
        fontFamily:'Avenir',
    }
});