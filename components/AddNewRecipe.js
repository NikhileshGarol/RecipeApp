import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {saveRecipe} from '../store/actions/recipeActions';

const AddNewRecipe = ({}) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [recipeImage, setRecipeImage] = useState('');
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  const handleAddRecipe = () => {
    const recipe = {
      id: Math.random().toString(36).substring(7),
      name: recipeName,
      image: recipeImage ? recipeImage.toString() : '',
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions: instructions,
    };

    dispatch(saveRecipe(recipe));

    // setId(prevCounter => prevCounter + 1);
    setRecipeName('');
    setIngredients('');
    setInstructions('');
    setRecipeImage('');
  };

  return (
    <View style={style.container}>
      <Image
        source={require('../assets/bgImage.jpg')}
        style={style.backgroundImage}
      />
      <TextInput
        style={style.input}
        placeholder="Recipe Name"
        value={recipeName}
        onChangeText={text => setRecipeName(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChangeText={text => setIngredients(text)}
      />
      <TextInput
        style={style.input}
        placeholder="Instructions"
        value={instructions}
        onChangeText={text => setInstructions(text)}
        multiline
      />
      <TextInput
        style={style.input}
        placeholder="Image URL (optional)"
        value={recipeImage}
        onChangeText={text => setRecipeImage(text)}
      />
      <View style={style.btn}>
        <Button title="Add Recipe" onPress={handleAddRecipe} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  btn: {
    padding: 120,
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

export default AddNewRecipe;
