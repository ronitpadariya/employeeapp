import * as React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateEmployee = ()=>{
    
    const [Name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [salary, setSalary] = React.useState("")
    const [picture, setPicture] = React.useState("")
    const [modal, setModal] = React.useState(false)

    return(
        <View style={styles.root}>
            
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            
            <TextInput
                label="Email"
                style={styles.inputStyle}
                value={email}
                theme={theme}
                keyboardType="email-address"
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Phone"
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />

            <TextInput
                label="Salary"
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />

            <Button 
                style={styles.inputStyle}
                icon="upload" 
                mode="contained"
                theme={theme}
                onPress={() => setModal(true)}>
                    Upload Image
            </Button>

            <Button 
                style={styles.inputStyle}
                icon="content-save" 
                mode="contained"
                theme={theme}
                onPress={() => console.log("saved")}>
                    Save
            </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" 
                            theme={theme}
                            mode="contained"
                            onPress={() => console.log("preses")}>
                                camera
                        </Button>
                        <Button icon="image-area" 
                            mode="contained"
                            theme={theme} 
                            onPress={() => console.log("preses")}>
                                gallery
                        </Button>
                    </View>
                    <Button 
                        theme={theme}
                        onPress={() => setModal(false)}>
                        cancel
                    </Button>
                </View>
            </Modal>

        </View>
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    }
})

export default CreateEmployee