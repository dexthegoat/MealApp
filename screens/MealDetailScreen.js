import { useLayoutEffect, useContext } from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/store';

// import { FavoritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';

export default function MealDetailScreen({ route, navigation }) {
  // const { ids, removeFavorite, addFavorite } = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

  const isFavorite = favoriteMealIds.includes(mealId);

  const toggleFavoritenClick = () => {
    if (isFavorite) {
      // removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite(mealId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={toggleFavoritenClick}
        />
      ),
    });
  }, [navigation, toggleFavoritenClick]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        style={{}}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <Subtitle>ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
});
