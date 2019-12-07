import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack'
import Quiz from './components/Quiz';
import Questions from './API/cards.json';

/* const AppStatusBar = ({ ...props }) => {
  return (
    <View style={{ backgroundColor: "orange", height: 120 }}>
      <StatusBar translucent backgroundColor="green" {...props} />
    </View>
  )
} */

const TabNavigator = createBottomTabNavigator({
  NewDeck: AddDeck,
  Decks: { screen: (props) => <DeckDetail {...props} /> },

}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'NewDeck') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        //IconComponent = NewDeckIconWithBadge;
      } else if (routeName === 'Decks') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);

const Stack = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  NewDeck: {
    screen: AddDeck
  },
  Decks: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  }

}, {
  navigationOptions: {
    headerTinColor: "black",
    headerTitleStyle: {
      fontSize: 22,
    }
  },
  cardStyle: {
    backgroundColor: "white",
  }
}
)


const AppContainer = createAppContainer(Stack);


const App = () => {
  const data = Questions
  let categoriesData = [];
  const getQuestions = () => {
    let key = 1;
    for (categorie in data) {
      categoriesData.push({
        key: key,
        title: categorie,
        data: data[categorie]
      })
    }
  }
  getQuestions()
  const [categories, setCategories] = useState(categoriesData)
  return (
    <View style={{ flex: 1 }}>
      <AppContainer screenProps={{ categories: categories }} />
    </View>
  )
}

export default App


