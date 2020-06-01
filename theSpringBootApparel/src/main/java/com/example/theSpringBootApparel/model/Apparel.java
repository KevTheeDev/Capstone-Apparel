package com.example.theSpringBootApparel.model;

import javax.persistence.*;

@Entity
@Table(name = "apparel")
public class Apparel {

    @Id
    @GeneratedValue
    @Column(name = "apparel_id")
    private long id;


    @Column(name = "shirt")
    private String shirt;

    @Column(name = "pants")
    private String pants;

    @Column(name = "shoes")
    private String shoes;

    @Column(name = "accessories")
    private String accessories;

    public Apparel() {
        super();
    }

    public Apparel(long id, String shirt, String pants, String shoes, String accessories) {
        this.id = id;
        this.shirt = shirt;
        this.pants = pants;
        this.shoes = shoes;
        this.accessories = accessories;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getShirt() {
        return shirt;
    }

    public void setShirt(String shirt) {
        this.shirt = shirt;
    }

    public String getPants() {
        return pants;
    }

    public void setPants(String pants) {
        this.pants = pants;
    }

    public String getShoes() { return shoes; }

    public void setShoes(String shoes) { this.shoes = shoes; }

    public String getAccessories() {
        return accessories;
    }

    public void setAccessories(String accessories) {
        this.accessories = accessories;
    }
}
