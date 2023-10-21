import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import NavBar from './NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({navigation, route}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState('');
  const [recipesData, setRecipesData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://recipesapi.kutaybekleric.com/recipes')
      .then(response => response.json())
      .then(data => {
        setRecipesData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = recipesData.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredRecipes(filtered);
  };

  const onRecipeClick = item => {
    // alert(JSON.stringify(item));
    navigation.navigate('RecipeDetails', {data: item});
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Image
        source={require('../assets/bgImage.jpg')}
        style={styles.backgroundImage}
      />
      <NavBar
        leftContentView={
          <TouchableOpacity onPress={handleLogout}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/logoutIcon.jpg')}
            />
          </TouchableOpacity>
        }
        title={'Home Page'}
        rightContentView={
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddNewRecipe')}>
              <Image
                style={styles.iconStyle}
                source={require('../assets/addBtn.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SavedRecipes')}>
              <Image
                style={styles.iconStyle}
                source={require('../assets/savedIcon.png')}
              />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search recipes"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <FlatList
          data={searchQuery?.length > 0 ? filteredRecipes : recipesData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.recipeCard}
              onPress={() => onRecipeClick(item)}>
              <Text>{item?.name}</Text>
              <Image style={styles.image} source={{uri: item?.image}} />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
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
  navBarHeaderTitle: {
    fontSize: 30,
  },
  iconStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
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

export default HomePage;
