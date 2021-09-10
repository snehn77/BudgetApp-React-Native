import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BudgetEntry from '../screens/budgetEntry';
import BudgetEntryListing from '../screens/budgetEntryListing';


const StackNavigator = createStackNavigator({  
    BudgetEntryListing:{
        screen: BudgetEntryListing
    },
    BudgetEntry:{
        screen : BudgetEntry
    }, 
},
{
    initialRouteName : 'BudgetEntryListing', 
    headerMode:'none',
    mode:'modal'
})


export default createAppContainer(StackNavigator);