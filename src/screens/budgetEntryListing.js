import React , { useState } from 'react';
import { StyleSheet, Text, View , Button ,FlatList} from 'react-native';
import Header from '../components/header';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addelement, deleteelement} from '../reducer/budgetApp'
export default function BudgetEntryListing({navigation}) {


    const elements = useSelector(state=>state)
    const dispatch = useDispatch()

    const addElement = element => {
      dispatch(addelement(element))
    }

    const plannedAmt = 'Planned Amount: $';
    const actualAmt = 'Actual Amount: $';
    const deleteElement = id =>dispatch(deleteelement(id))
    return (
      <>
       <Header titleText="Budget Listings"/>
       <View style={styles.container}>
         {elements.length === 0 ?(
            <View style={styles.titleContainer}>
               <Text style={styles.title}>No Entries Yet</Text>
            </View>
         ):(
           <View style={styles.list}>
               <FlatList data={elements}
                     renderItem={({item})=>(
                       <List.Item title={item.element.elementName}
                                  description = {plannedAmt +  item.element.elementPlannedAmount + '\n' + actualAmt +item.element.elementActualAmount}
                                  titleStyle={styles.listTitle}
                                  descriptionStyle = {styles.listDescription}
                                  onPress={() => deleteElement(item.id)}
                                  style={styles.Box}
                       />
                     )}
                        keyExtractor = {item =>item.id.toString()}
                     />
          </View>      
         )}

         <View style={styles.button}>
              <Button title="Go to Listing" color="coral" onPress={()=> navigation.navigate('BudgetEntry' , {addElement})}/>
         </View>
       </View> 
      </>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2833',
      paddingVertical:20,
      paddingHorizontal:10
    },
    titleContainer:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:20,
        color:'white'
    },
    button:{
      paddingTop:20,
      flex:1
    },
    listTitle:{
      fontSize:20,
      color:'aqua'
    },
    listDescription :{
      color:'white'
    },
    Box:{
      borderRadius:10,
      backgroundColor:'black',
      marginTop:10
    },
    list:{
      flex:10
    }
  });