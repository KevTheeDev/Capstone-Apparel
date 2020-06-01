package com.example.theSpringBootApparel.repository;

import com.example.theSpringBootApparel.model.Apparel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApparelRepository extends JpaRepository<Apparel, Long> {
}
