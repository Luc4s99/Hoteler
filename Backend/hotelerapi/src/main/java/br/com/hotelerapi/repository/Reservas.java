package br.com.hotelerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hotelerapi.model.Reserva;

public interface Reservas extends JpaRepository<Reserva, Long>{

}
