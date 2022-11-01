import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
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

  return <MealsList items={displayedMeals} />;
}
