package br.com.hotelerapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.hotelerapi.model.Reserva;
import br.com.hotelerapi.repository.Reservas;

@Service
public class ReservaService {

	@Autowired
	private Reservas reservas;
	
	//Listar todas as reservas
	public ResponseEntity<?> listarTodasReservas() {
		
		List<Reserva> todasReservas = reservas.findAll();
		
		return(todasReservas.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(todasReservas));
	}
	
	//Buscar reserva por ID
	public ResponseEntity<?> buscarReservaPorId(Long id) {
		
		Reserva reservaPorId = reservas.findById(id).get();
		
		return(reservaPorId.equals(null) ? ResponseEntity.noContent().build() : ResponseEntity.ok(reservaPorId));
	}
	
	//Salvar uma reserva
	public ResponseEntity<?> salvarReserva(Reserva reserva) {
		Reserva reservaSalva = reservas.save(reserva);
		
		//Se a reserva for null, responde com o status de não criada, senão com status de sucesso
		return(reservaSalva.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.status(HttpStatus.CREATED).build());
	}
	
	//Deletar uma reserva
	public ResponseEntity<?> deletarReserva(Long id) {
		
		try {
			
			reservas.deleteById(id);
			
			return ResponseEntity.ok().build();
			
		} catch(Exception ex) {
		
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
	
	//Atualizar uma reserva
	public ResponseEntity<?> atualizarReserva(Reserva reserva) {
		
		Reserva reservaAtualizada = reservas.save(reserva);
		
		return(reservaAtualizada.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(reservaAtualizada));
	}
}
