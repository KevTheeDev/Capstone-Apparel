package com.example.theSpringBootApparel.repository;

import com.example.theSpringBootApparel.model.Promotions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionsRepository extends JpaRepository<Promotions, Long> {
}
