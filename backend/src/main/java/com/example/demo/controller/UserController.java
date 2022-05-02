package com.example.demo.controller;

import java.util.Optional;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository usersRepository;

    @RequestMapping
    public ResponseEntity<Object> findUsers() {
        return ResponseEntity.ok(usersRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> Insert(@RequestBody User user){
        return ResponseEntity.ok(usersRepository.save(user));
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
    public ResponseEntity<User> updateExpense(@PathVariable("id") long id, @RequestBody User user) {
        User foundedUser = usersRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User with id " + id + " not found"));
        foundedUser.setName(user.getName());
        foundedUser.setEmail(user.getEmail());
        foundedUser.setPassword(user.getPassword());
        foundedUser.setToken(user.getToken());
        foundedUser.setRecipes(user.getRecipes());
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
