import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealsOverviewScreen({ route: { params }, navigation }) {
  const catId = params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({ title });
  }, [catId, navigation]);

  function renderMealItem({ item }) {
    const itemProps = {
      id: item.id,
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
