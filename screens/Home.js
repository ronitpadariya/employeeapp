import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { Card, FAB } from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'

const Home=({navigation})=>{
    
    // const [data,setData] = useState([])
    // const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const {data,loading} = useSelector((state)=>{
        return state
    })

    const fetchData = ()=>{
        fetch("http://professional-app.herokuapp.com/").
        then(res=>res.json())
        .then(results=>{

            // setData(results)
            // setLoading(false)

            dispatch({type:"ADD_DATA",payload:results})
            dispatch({type:"SET_LOADING",payload:false})
        }).catch(err=>{
            Alert.alert("Something went wrong")
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const renderList = ({item}) => (
            
                <Card style={styles.mycard} key={item._id}
                    onPress={()=> navigation.navigate("Profile",{item})}
                >
                    <View style={styles.cardView}>
                        <Image 
                            style={{width:60,height:60,borderRadius:30}}
                            source={{uri:item.picture}}
                            />
                        <View style={{marginLeft:10}}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text style={styles.text}>{item.position}</Text>
                        </View>
                    </View>
                </Card>
            
    );
    

    return (
        <View style={{flex:1}}>
            
                <FlatList 
                    data={data}
                    renderItem={renderList}
                    keyExtractor={item=>item._id}
                    onRefresh={()=>fetchData()}
                    refreshing={loading}
                />
            
            

            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
                onPress={() => navigation.navigate("Create")}
            />

        </View> 
    )
}

const styles = {
    
    mycard:{
        margin:5,
    },
    
    cardView:{
        flexDirection:"row",
        padding:6
    },
    
    text:{
        fontSize:18,
    },
    
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
}

export default Home