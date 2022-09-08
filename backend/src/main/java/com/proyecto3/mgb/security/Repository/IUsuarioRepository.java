/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.proyecto3.mgb.security.Repository;

import com.proyecto3.mgb.security.Entity.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository  extends JpaRepository<Usuario, Integer>{
    Optional<Usuario> FindByNombreUsuario(String nombreUsuario);
    
   
    Boolean existsByNombreUsuario(String nombreUsuario);
    Boolean existsByEmail(String email);
    
}
