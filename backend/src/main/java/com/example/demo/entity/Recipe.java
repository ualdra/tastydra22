package com.example.demo.entity;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Meal Id is mandatory")
    private long mealId;

    @NotNull(message = "Date is mandatory")
    private Date date;

    @NotBlank(message = "Meal type is mandatory")
    @Length(max = 15)
    private String mealType;

    public Recipe() {
    }

    public Recipe(long mealId, Date date, String mealType) {
        this.date = date;
        this.mealType = mealType;
        this.mealId = mealId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getMealId() {
        return this.mealId;
    }

    public void setMealId(long mealId) {
        this.mealId = mealId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }

    @Override
    public String toString() {
        return "Recipe: " + id + "\nMeal Id: " + mealId + "\nDate: " + date + "\nMeal type: " + mealType;
    }
}
