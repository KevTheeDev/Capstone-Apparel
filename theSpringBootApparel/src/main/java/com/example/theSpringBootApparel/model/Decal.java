package com.example.theSpringBootApparel.model;

import javax.persistence.*;

@Entity
@Table(name = "decal")
public class Decal {

    @Id
    @GeneratedValue
    @Column(name = "decal_id")
    private long id;


    @Column(name = "shirt_decal")
    private String shirt_decal;

    @Column(name = "pants_decal")
    private String pants_decal;

    @Column(name = "shoes_decal")
    private String shoes_decal;

    @Column(name = "accessories_decal")
    private String accessories_decal;

    public Decal(){
        super();
    }

    public Decal(long id, String shirt_decal, String pants_decal, String shoes_decal, String accessories_decal) {
        this.id = id;
        this.shirt_decal = shirt_decal;
        this.pants_decal = pants_decal;
        this.shoes_decal = shoes_decal;
        this.accessories_decal = accessories_decal;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getShirt_decal() {
        return shirt_decal;
    }

    public void setShirt_decal(String shirt_decal) {
        this.shirt_decal = shirt_decal;
    }

    public String getPants_decal() {
        return pants_decal;
    }

    public void setPants_decal(String pants_decal) {
        this.pants_decal = pants_decal;
    }

    public String getShoes_decal() {
        return shoes_decal;
    }

    public void setShoes_decal(String shoes_decal) {
        this.shoes_decal = shoes_decal;
    }

    public String getAccessories_decal() {
        return accessories_decal;
    }

    public void setAccessories_decal(String accessories_decal) {
        this.accessories_decal = accessories_decal;
    }
}
