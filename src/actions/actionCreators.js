// Add recipe to recipes
export function addRecipe(recipe) {
	return {
		type: 'ADD_RECIPE',
		recipe
	}
}

export function removeRecipe(recipeId) {
	return {
		type: 'REMOVE_RECIPE',
		recipeId
	}
}