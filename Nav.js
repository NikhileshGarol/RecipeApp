// NavigationContainer.js

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './components/HomePage';
import SavedRecipes from './components/SavedRecipes';
import RecipeDetails from './components/RecipeDetails';
import {StyleSheet, View} from 'react-native';
import AddNewRecipe from './components/AddNewRecipe';
import LoginScreen from './components/LoginScreen';
import {UserProvider} from './store/UserContext';

const Nav = () => {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
            <Stack.Screen name="SavedRecipes" component={SavedRecipes} />
            <Stack.Screen name="AddNewRecipe" component={AddNewRecipe} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 32,
    // paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Nav;
