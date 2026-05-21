import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RecipeListModal } from './components/RecipeListModal';

import { RecipeDetail } from './components/RecipeDetail';

export default function App() {
  const [selectedRecipeId, setSelectedRecipeId] = React.useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {selectedRecipeId === null ? (
        <RecipeListModal onSelectRecipe={(id) => setSelectedRecipeId(id)} />
      ) : (
        <RecipeDetail recipeId={selectedRecipeId} onBack={() => setSelectedRecipeId(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
