package com.example.demo.controller;

import java.util.Optional;

import com.example.demo.entity.Ingredient;
import com.example.demo.entity.Recipe;
import com.example.demo.entity.User;
import com.example.demo.modelDTO.SigninDTO;
import com.example.demo.repository.RecipeRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository usersRepository;

    @Autowired
    RecipeRepository recipesRepository;
    
    @Autowired
    IngredientRepository ingredientsRepository;

    @RequestMapping
    public ResponseEntity<Object> findUsers() {
        return ResponseEntity.ok(usersRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> Insert(@RequestBody User user) {
        if (user != null) {
            List<Recipe> userRecipes = user.getRecipes();
            if (userRecipes.size() > 0) {
                for (Recipe recipe : userRecipes) {
                    recipesRepository.save(recipe);
                }
            }
            List<Ingredient> userIngredients = user.getIngredients();
            if (userIngredients.size() > 0) {
                for (Ingredient ingredient : userIngredients) {
                    ingredientsRepository.save(ingredient);
                }
            }
        }
        return ResponseEntity.ok(usersRepository.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<Object> Login(@RequestBody SigninDTO signinDTO) {
        if (signinDTO.getEmail() == null && signinDTO.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        User user = usersRepository.findByEmailAndPassword(signinDTO.getEmail(), signinDTO.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Object> findUserById(@PathVariable long id) {
        Optional<User> user = usersRepository.findById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
        User foundedUser = usersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " not found"));
        foundedUser.setName(user.getName());
        foundedUser.setEmail(user.getEmail());
        foundedUser.setPassword(user.getPassword());
        foundedUser.setToken(user.getToken());
        foundedUser.setRecipes(user.getRecipes());
        foundedUser.setIngredient(user.getIngredients());
        final User updatedUser = usersRepository.save(foundedUser);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        Optional<User> user = usersRepository.findById(id);
        if (user != null) {
            usersRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
