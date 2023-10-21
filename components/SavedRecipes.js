// RecipeList.js
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {getSavedRecipes} from '../store/actions/recipeActions';

const SavedRecipes = ({savedRecipes, route, navigation, user}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedRecipes());
  }, []);

  const recipeItems = useSelector(state => state.recipe.savedRecipes);
  const userData = useSelector(state => state.user);

  const onRecipeClick = item => {
    navigation.navigate('RecipeDetails', {data: item});
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bgImage.jpg')}
        style={styles.backgroundImage}
      />
      <FlatList
        data={recipeItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.recipeCard}
            onPress={() => onRecipeClick(item)}>
            <Text>{item?.name}</Text>
            <Image
              style={styles.image}
              source={
                item?.image
                  ? {uri: item?.image}
                  : require('../assets/noImage.png')
              }
            />
          </TouchableOpacity>
        )}
      />
      {/* <Button title="Clear Saved Recipes" onPress={() => clearSavedRecipes} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 10,
  },
  recipeCard: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
  },
  image: {
    height: 120,
    width: 220,
    borderRadius: 10,
    marginTop: 10,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
});

export default SavedRecipes;
