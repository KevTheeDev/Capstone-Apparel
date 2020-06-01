package com.example.theSpringBootApparel.controller;

import java.util.*;

import com.example.theSpringBootApparel.exceptions.ResourcesNotFoundException;
import com.example.theSpringBootApparel.model.Decal;
import com.example.theSpringBootApparel.repository.DecalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/decal_api/v1")
public class DecalController {

    @Autowired
    private DecalRepository decalRepository;
    //  get all apparel
    @GetMapping("/decal")
    public List<Decal> get(Model model) {
        return this.decalRepository.findAll();
    }


//  get all apparel by id

    @GetMapping("/decal/{id}")
    public ResponseEntity<Decal> getDecalById(@PathVariable(value = "id") Long decalId)
            throws ResourcesNotFoundException {
        Decal decal = decalRepository.findById(decalId)
                .orElseThrow(() -> new ResourcesNotFoundException("Decal not found for this id :: " + decalId));
        return ResponseEntity.ok().body(decal);
    }

//  Save decal

    @PostMapping("/decal")
    public Decal createDecal(@Valid @RequestBody Decal decal) {
        return decalRepository.save(decal);
    }

//  Update Decal

    @PutMapping("/decal/{id}")
    public ResponseEntity<Decal> updatedDecal(@PathVariable(value = "id") Long decalId,
                                                  @Valid @RequestBody Decal decalDetails)
            throws ResourcesNotFoundException {
        Decal decal = decalRepository.findById(decalId)
                .orElseThrow(()-> new ResourcesNotFoundException("Decal not found for this id :: " + decalId));


        decal.setPants_decal(decalDetails.getPants_decal());
        decal.setShirt_decal(decalDetails.getShirt_decal());
        decal.setShoes_decal(decalDetails.getShoes_decal());
        decal.setAccessories_decal(decalDetails.getAccessories_decal());

        final Decal updatedDecal = decalRepository.save(decal);


        return ResponseEntity.ok(updatedDecal);

    }

//  Delete Decal

    @DeleteMapping("/decal/{id}")
    public Map<String, Boolean> deletedDecal(@PathVariable(value = "id") Long decalId)
            throws ResourcesNotFoundException {
        Decal decal = decalRepository.findById(decalId)
                .orElseThrow(()-> new ResourcesNotFoundException("Decal not found for this id :: " + decalId));

        decalRepository.delete(decal);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted Decal", Boolean.TRUE);

        return response;

    }

}
