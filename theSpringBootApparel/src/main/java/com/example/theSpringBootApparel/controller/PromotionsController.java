package com.example.theSpringBootApparel.controller;

import java.util.*;

import com.example.theSpringBootApparel.exceptions.ResourcesNotFoundException;
import com.example.theSpringBootApparel.model.Promotions;
import com.example.theSpringBootApparel.repository.PromotionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/promos_api/v1")
public class PromotionsController {

    @Autowired
    private PromotionsRepository promotionsRepository;
    //  get all promos
    @GetMapping("/promos")
    public List<Promotions> get(Model model) {
        return this.promotionsRepository.findAll();
    }


//  get all apparel by id

    @GetMapping("/promos/{id}")
    public ResponseEntity<Promotions> getDecalById(@PathVariable(value = "id") Long promosId)
            throws ResourcesNotFoundException {
        Promotions promotions = promotionsRepository.findById(promosId)
                .orElseThrow(() -> new ResourcesNotFoundException("Promo not found for this id :: " + promosId));
        return ResponseEntity.ok().body(promotions);
    }

//  Save promo

    @PostMapping("/promos")
    public Promotions createDecal(@Valid @RequestBody Promotions promotions) {
        return promotionsRepository.save(promotions);
    }

//  Update Promo

    @PutMapping("/promos/{id}")
    public ResponseEntity<Promotions> updatedPromos(@PathVariable(value = "id") Long promosId,
                                              @Valid @RequestBody Promotions promosDetails)
            throws ResourcesNotFoundException {
        Promotions promotions = promotionsRepository.findById(promosId)
                .orElseThrow(()-> new ResourcesNotFoundException("Promo not found for this id :: " + promosId));


        promotions.setFb_promo(promosDetails.getFb_promo());
        promotions.setInsta_promo(promosDetails.getInsta_promo());
        promotions.setYt_promo(promosDetails.getYt_promo());

        final Promotions updatedPromos = promotionsRepository.save(promotions);

        return ResponseEntity.ok(updatedPromos);

    }

//  Delete Promos

    @DeleteMapping("/promos/{id}")
    public Map<String, Boolean> deletedPromos(@PathVariable(value = "id") Long promosId)
            throws ResourcesNotFoundException {
        Promotions promotions = promotionsRepository.findById(promosId)
                .orElseThrow(()-> new ResourcesNotFoundException("Promos not found for this id :: " + promosId));

        promotionsRepository.delete(promotions);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted Promos", Boolean.TRUE);

        return response;

    }

}
