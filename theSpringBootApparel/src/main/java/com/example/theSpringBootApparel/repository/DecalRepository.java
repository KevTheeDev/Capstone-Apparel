package com.example.theSpringBootApparel.repository;

import com.example.theSpringBootApparel.model.Decal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DecalRepository extends JpaRepository<Decal, Long> {
}
