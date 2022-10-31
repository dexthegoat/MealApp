import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';

import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import List from '../components/MealDetail/List';

import { MEALS } from '../data/dummy-data';

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

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
