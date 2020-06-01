package com.example.theSpringBootApparel.controller;

import java.util.*;

import com.example.theSpringBootApparel.exceptions.ResourcesNotFoundException;
import com.example.theSpringBootApparel.model.Apparel;
import com.example.theSpringBootApparel.repository.ApparelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/apparel_api/v1")
public class ApparelController {

    @Autowired
    private ApparelRepository apparelRepository;
    //  get all apparel
    @GetMapping("/apparel")
    public List<Apparel> get(Model model) {
        return this.apparelRepository.findAll();
    }


//  get all apparel by id

    @GetMapping("/apparel/{id}")
    public ResponseEntity<Apparel> getApparelById(@PathVariable(value = "id") Long apparelId)
            throws ResourcesNotFoundException {
        Apparel apparel = apparelRepository.findById(apparelId)
                .orElseThrow(() -> new ResourcesNotFoundException("Clothes not found for this id :: " + apparelId));
        return ResponseEntity.ok().body(apparel);
    }

//  Save apparel

    @PostMapping("/apparel")
    public Apparel createApparel(@Valid @RequestBody Apparel apparel) {
        return apparelRepository.save(apparel);
    }

//  Update Apparel

    @PutMapping("/apparel/{id}")
    public ResponseEntity<Apparel> updatedApparel(@PathVariable(value = "id") Long apparelId,
                                           @Valid @RequestBody Apparel apparelDetails)
            throws ResourcesNotFoundException {
        Apparel apparel = apparelRepository.findById(apparelId)
                .orElseThrow(()-> new ResourcesNotFoundException("Apparel not found for this id :: " + apparelId));


        apparel.setPants(apparelDetails.getPants());
        apparel.setShirt(apparelDetails.getShirt());
        apparel.setShoes(apparelDetails.getShoes());
        apparel.setAccessories(apparelDetails.getAccessories());

        final Apparel updatedApparel = apparelRepository.save(apparel);


        return ResponseEntity.ok(updatedApparel);

    }

//  Delete Clothes

    @DeleteMapping("/apparel/{id}")
    public Map<String, Boolean> deletedApparel(@PathVariable(value = "id") Long apparelId)
            throws ResourcesNotFoundException {
        Apparel apparel = apparelRepository.findById(apparelId)
                .orElseThrow(()-> new ResourcesNotFoundException("Apparel not found for this id :: " + apparelId));

        apparelRepository.delete(apparel);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted Apparel", Boolean.TRUE);

        return response;

    }

}
