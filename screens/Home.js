import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper'

const Home=({navigation})=>{
    const data = [
        {id:"1", name:"Rakesh", email:"rakesh@mail.com", salary:"5 LPA", phone:"123", position:"android dev", picture:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"},
        {id:"2", name:"Suresh", email:"suresh@mail.com", salary:"8 LPA", phone:"456", position:"web dev", picture:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"},
        {id:"3", name:"Ramesh", email:"ramesh@mail.com", salary:"10 LPA", phone:"789", position:"ML expert", picture:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"},
        {id:"4", name:"Hitesh", email:"hitesh@mail.com", salary:"15 LPA", phone:"012", position:"AI dev", picture:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"},
    ]

    const renderList = ({item}) => (
            
                <Card style={styles.mycard} key={item.id}
                    onPress={()=> navigation.navigate("Profile",{item})}
                >
                    <View style={styles.cardView}>
                        <Image 
                            style={{width:60,height:60,borderRadius:30}}
                            source={{uri:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"}}
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
                keyExtractor={item=>item.id}
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