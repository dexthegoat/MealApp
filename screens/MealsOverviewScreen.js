import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverviewScreen({ route: { params } }) {
  const catId = params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem({ item }) {
    const itemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...itemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
