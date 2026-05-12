package com.GestionStockBoisson.models;

public class User {

    private int id;
    private String nom;
    private String email;

    // constructeur vide
    public User() {}

    // constructeur sans id
    public User(String nom, String email) {
        this.nom = nom;
        this.email = email;
    }

    // constructeur complet
    public User(int id, String nom, String email) {
        this.id = id;
        this.nom = nom;
        this.email = email;
    }

    // GETTERS et SETTERS

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}