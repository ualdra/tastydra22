package com.example.demo.repository;

import com.example.demo.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    
}