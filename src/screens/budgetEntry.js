import React , { useState } from 'react';
import { StyleSheet,ToastAndroid,View , Button , TouchableOpacity , Text } from 'react-native';
import { TextInput} from 'react-native-paper'
import Header from '../components/header';

export default function BudgetEntry({navigation}) {

    const [elementName , setElementName] = useState('');
    const [elementPlannedAmount , setElementPlannedAmount] = useState('');
    const [elementActualAmount , setElementActualAmount] = useState('');

    function onSaveElement(){
        navigation.state.params.addElement({elementName , elementPlannedAmount , elementActualAmount})
        setElementActualAmount('')
        setElementName('')
        setElementPlannedAmount('')
        ToastAndroid.show('Save Successfully! ' , ToastAndroid.SHORT)
    }
    return (
       <>
       <Header titleText="Budget Entry"/>
       <View style={styles.container}>
         <TextInput label="Name" value={elementName} mode="outlined" 
                    onChangeText={setElementName}
                    style={styles.title}
                    outlineColor = "white"
                    theme={{ colors: { text: "aqua", accent:'coral', primary: "aqua", placeholder: "white"} }} 
                />
         <TextInput label="Planned Amount" value={elementPlannedAmount} mode="outlined" 
                    onChangeText={setElementPlannedAmount}
                    style={styles.title}
                    keyboardType="numeric"
                    outlineColor = "white"
                    theme={{ colors: { text: "aqua", accent:'coral', primary: "aqua", placeholder: "white"} }} 
        
         />
         <TextInput label="Actual Amount" value={elementActualAmount} mode="outlined" 
                    onChangeText={setElementActualAmount}
                    style={styles.title}
                    keyboardType='numeric'
                    outlineColor = "white"
                    theme={{ colors: { text: "aqua", accent:'coral', primary: "aqua", placeholder: "white"} }} 
         />
         <View style={styles.buttons}>
             <TouchableOpacity  disabled={elementName == '' || elementPlannedAmount=='' || elementActualAmount==''? true : false}
                                onPress={() => onSaveElement()}
                                style={styles.saveButton}>
                 <Text style={styles.text}> SAVE </Text>
             </TouchableOpacity>

             <TouchableOpacity  onPress={()=>navigation.goBack()}
                                style={styles.goButton}>
                 <Text style={styles.text}> SHOW ITEMS </Text>
             </TouchableOpacity>
         </View>
       </View> 
       </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f2833',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    buttons: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:80
        
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        backgroundColor:'#0B0C10',
        paddingTop:15
    },
    saveButton:{
        backgroundColor:'#5cb85c',
        width:100,
        height:50,
        paddingLeft:15
    },
    goButton:{
        backgroundColor:'coral',
        width:150,
        height:50,
    },
    text:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        fontSize:20,
        color:'white'
    }
})