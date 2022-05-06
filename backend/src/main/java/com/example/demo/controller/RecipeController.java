package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import com.example.demo.entity.Recipe;
import com.example.demo.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/recipes")
public class RecipeController {
    @Autowired
    RecipeRepository recipesRepository;

    @RequestMapping
    public ResponseEntity<Object> findRecipes() {
        return ResponseEntity.ok(recipesRepository.findAll());
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Object> findRecipeById(@PathVariable long id) {
        Optional<Recipe> recipe = recipesRepository.findById(id);
        if (recipe != null) {
            return ResponseEntity.ok(recipe);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/mealType={mealType}")
    public ResponseEntity<Object> findRecipesByMealType(@PathVariable String mealType) {
        List<Recipe> recipes = recipesRepository.findByMealType(mealType);
        if (recipes != null) {
            return ResponseEntity.ok(recipes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<Object> Insert(@RequestBody Recipe recipe){
        return ResponseEntity.ok(recipesRepository.save(recipe));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable("id") long id, @RequestBody Recipe recipe) {
        Recipe foundedRecipe = recipesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Recipe with id " + id + " not found"));
        foundedRecipe.setDate(recipe.getDate());
        foundedRecipe.setMealType(recipe.getMealType());
        final Recipe updatedRecipe = recipesRepository.save(foundedRecipe);
        return ResponseEntity.ok(updatedRecipe);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        Optional<Recipe> recipe = recipesRepository.findById(id);
        if (recipe != null) {
            recipesRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
