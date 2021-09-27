import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';


const Profile = (props)=>{

    const {id, name, email, salary, phone, position, picture} = props.route.params.item

    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:123456")
        } else {
            Linking.openURL("telprompt:123456")
        }
    }

    return(
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff","#6bc1ff"]}
                style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image 
                    style={{width:100,height:100, borderRadius:50, marginTop:-50}}
                    source={{uri:"https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80"}}
                />
            </View>
            <View style={{alignItems:"center",margin:15}}>
                <Title>{name}</Title>
                <Text style={{fontSize:15}}>{position}</Text>
            </View>
            
            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:abc@abc.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>

            <Card style={styles.mycard} onPress={()=>{
                openDial()
            }}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{salary}</Text>
                </View>
            </Card>

            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                <Button icon="account-edit" 
                    mode="contained"
                    theme={theme} 
                    onPress={() => console.log("Pressed")}>
                    Edit
                </Button>
                <Button icon="delete" 
                    mode="contained"
                    theme={theme} 
                    onPress={() => console.log("Pressed")}>
                    Fire employee
                </Button>
            </View>

        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        marginTop:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:15,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile