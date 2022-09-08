package com.proyecto3.mgb.service;

import com.proyecto3.mgb.Entity.Persona;
import com.proyecto3.mgb.Interface.IPersonaService;
import com.proyecto3.mgb.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{
    @Autowired IPersonaRepository ipersonaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona>persona = ipersonaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona Persona) {
       ipersonaRepository.save(Persona);
    }

    @Override
    public void deletePersona(Long Id) {
        ipersonaRepository.existsById(Id);
    }

    @Override
    public Persona findPersona(Long Id) {
        Persona persona = ipersonaRepository.findById(Id).orElse(null);
        return persona;
    }
    
    
}
