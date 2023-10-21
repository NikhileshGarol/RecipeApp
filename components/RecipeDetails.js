import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {saveRecipe} from '../store/actions/recipeActions';
import {connect, useDispatch, useSelector} from 'react-redux';

const RecipeDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const recipeItems = useSelector(state => state.recipe.savedRecipes);

  const {data} = route?.params;
  const onSaveRecipe = recipe => {
    const isDuplicate = recipeItems.some(
      savedRecipe => savedRecipe.id === recipe.id,
    );
    if (!isDuplicate) {
      dispatch(saveRecipe(recipe));
      alert('Recipe Saved');
    } else {
      alert('Recipe already saved');
    }
  };
  return (
    <ScrollView style={style.container}>
      <Image
        style={style.image}
        source={
          data?.image ? {uri: data?.image} : require('../assets/noImage.png')
        }
      />
      <View style={style.textContainer}>
        <Text style={style.title}>Recipe Name: {data?.name}</Text>
        <Text style={style.desc}>Description: {data?.description}</Text>
        <Text style={style.steps}>Steps: {data?.steps}</Text>
        <Text style={style.steps}>Ingredients: {data?.ingredients}</Text>
      </View>
      <View style={style.btn}>
        <Button title="Save Recipe" onPress={() => onSaveRecipe(data)} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  image: {
    height: 120,
    width: 220,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    paddingVertical: 5,
  },
  desc: {
    fontSize: 20,
    paddingVertical: 5,
  },
  textContainer: {
    paddingTop: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  steps: {
    fontSize: 15,
  },
  btn: {
    padding: 120,
  },
});

export default RecipeDetails;
