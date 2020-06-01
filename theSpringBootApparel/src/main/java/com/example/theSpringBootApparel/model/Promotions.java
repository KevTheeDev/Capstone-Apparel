package com.example.theSpringBootApparel.model;

import javax.persistence.*;

@Entity
@Table(name = "promos")
public class Promotions {

    @Id
    @GeneratedValue
    @Column(name = "promo_id")
    private long id;


    @Column(name = "fb_promo")
    private long fb_promo;

    @Column(name = "insta_promo")
    private long insta_promo;

    @Column(name = "yt_promo")
    private long yt_promo;

    public Promotions() {
        super();
    }

    // How many weeks of promotions in a fiscal year

    public Promotions(long id, long fb_promo, long insta_promo, long yt_promo) {
        this.id = id;
        this.fb_promo = fb_promo;
        this.insta_promo = insta_promo;
        this.yt_promo = yt_promo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getFb_promo() {
        return fb_promo;
    }

    public void setFb_promo(long fb_promo) {
        this.fb_promo = fb_promo;
    }

    public long getInsta_promo() {
        return insta_promo;
    }

    public void setInsta_promo(long insta_promo) {
        this.insta_promo = insta_promo;
    }

    public long getYt_promo() {
        return yt_promo;
    }

    public void setYt_promo(long yt_promo) {
        this.yt_promo = yt_promo;
    }
}