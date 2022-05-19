package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import com.example.demo.entity.Recipe;
import com.example.demo.entity.User;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.UserRepository;

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

    @Autowired
    UserRepository usersRepository;

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

    @GetMapping("/userId={userId}")
    public ResponseEntity<Object> findRecipesByUserId(@PathVariable long userId) {
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            List<Recipe> recipes = user.get().getRecipes();
            return ResponseEntity.ok(recipes);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/userId={userId}")
    public ResponseEntity<Object> Insert(@PathVariable long userId, @RequestBody Recipe recipe){
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            List<Recipe> recipes = user.get().getRecipes();
            recipes.add(recipe);
            user.get().setRecipes(recipes);
            return ResponseEntity.ok(recipesRepository.save(recipe));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable("id") long id, @RequestBody Recipe recipe) {
        Recipe foundedRecipe = recipesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Recipe with id " + id + " not found"));
        foundedRecipe.setDate(recipe.getDate());
        foundedRecipe.setMealType(recipe.getMealType());
        foundedRecipe.setMealId(recipe.getMealId());
        final Recipe updatedRecipe = recipesRepository.save(foundedRecipe);
        return ResponseEntity.ok(updatedRecipe);
    }

    @DeleteMapping("/{userId}/{recipeId}")
    public ResponseEntity<Object> delete(@PathVariable("recipeId") long recipeId, @PathVariable("userId") long userId) {
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            user.get().getRecipes().removeIf(obj -> obj.getId() == recipeId);
            recipesRepository.deleteById(recipeId);
            usersRepository.save(user.get());
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
