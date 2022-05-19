package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;


@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "IngredientName is mandatory")
    @Length(max = 80)
    private String ingredientName;

    private Boolean isChecked;

    public Ingredient() {
    }

    public Ingredient(String ingredientName, Boolean isChecked) {
        this.ingredientName = ingredientName;
        this.isChecked = isChecked;
    }

    public Boolean getIsChecked() {
        return this.isChecked;
    }

    public void setIsChecked(Boolean isChecked) {
        this.isChecked = isChecked;
    }

    public String getIngredientName() {
        return this.ingredientName;
    }

    public void setingredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public long getId(){
        return this.id;
    }

    @Override
    public String toString() {
        return "Ingredient: " + id + "\nIngredient name Id: " + ingredientName + "\nIs checked " + isChecked;
    }
}
