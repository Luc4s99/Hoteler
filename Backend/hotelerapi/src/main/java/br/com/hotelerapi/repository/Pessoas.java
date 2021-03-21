package br.com.hotelerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hotelerapi.model.Pessoa;

public interface Pessoas extends JpaRepository<Pessoa, Long>{

}
