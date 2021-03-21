package br.com.hotelerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hotelerapi.model.Operador;

public interface Hospedes extends JpaRepository<Operador, Long>{

}
