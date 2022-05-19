package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import com.example.demo.entity.Ingredient;
import com.example.demo.entity.User;
import com.example.demo.repository.IngredientRepository;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ingredients")
public class IngredientController {
    @Autowired
    IngredientRepository ingredientsRepository;

    @Autowired
    UserRepository usersRepository;

    @RequestMapping
    public ResponseEntity<Object> findIngredients() {
        return ResponseEntity.ok(ingredientsRepository.findAll());
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Object> findIngredientById(@PathVariable long id) {
        Optional<Ingredient> ingredient = ingredientsRepository.findById(id);
        if (ingredient != null) {
            return ResponseEntity.ok(ingredient);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/ingredientName={ingredientName}")
    public ResponseEntity<Object> findIngredientByName(@PathVariable String ingredientName) {
        List<Ingredient> ingredient = ingredientsRepository.findByIngredientName(ingredientName);
        if (ingredient != null) {
            return ResponseEntity.ok(ingredient);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/userId={userId}")
    public ResponseEntity<Object> findIngredientByUserId(@PathVariable long userId) {
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            List<Ingredient> ingredients = user.get().getIngredients();
            return ResponseEntity.ok(ingredients);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/userId={userId}")
    public ResponseEntity<Object> Insert(@PathVariable long userId, @RequestBody Ingredient ingredient){
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            List<Ingredient> ingredients = user.get().getIngredients();
            ingredients.add(ingredient);
            user.get().setIngredient(ingredients);
            return ResponseEntity.ok(ingredientsRepository.save(ingredient));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Ingredient> updateIngredient(@PathVariable("id") long id, @RequestBody Ingredient ingredient) {
        Ingredient foundedIngredient = ingredientsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ingredient with id " + id + " not found"));
        foundedIngredient.setingredientName(ingredient.getIngredientName());
        foundedIngredient.setIsChecked(ingredient.getIsChecked());
        final Ingredient updatedIngredient = ingredientsRepository.save(foundedIngredient);
        return ResponseEntity.ok(updatedIngredient);
    }

    @DeleteMapping("/{userId}/{ingredientId}")
    public ResponseEntity<Object> delete(@PathVariable("ingredientId") long ingredientId, @PathVariable("userId") long userId) {
        Optional<User> user = usersRepository.findById(userId);
        if (user != null) {
            user.get().getIngredients().removeIf(obj -> obj.getId() == ingredientId);
            ingredientsRepository.deleteById(ingredientId);
            usersRepository.save(user.get());
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
