package br.com.hotelerapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.hotelerapi.model.Hospede;
import br.com.hotelerapi.repository.Hospedes;

@Service
public class HospedeService {

	@Autowired
	private Hospedes hospedes;
	
	//Listar todos os hospedes
	public ResponseEntity<?> listarHospedes() {
		
		List<Hospede> todosHospedes = hospedes.findAll();
		
		return(todosHospedes.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.ok(todosHospedes));
	}
	
	//Listar hospede por id
	public ResponseEntity<?> listarHospedePorId(Long id) {
		
		Hospede hospede = hospedes.findById(id).get();
		
		return(hospede.equals(null) ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.ok(hospede));
	}
	
	//Salvar hospede
	public ResponseEntity<?> salvarHospede(Hospede hospede) {
		
		Hospede hospedeSalvo = hospedes.save(hospede);
		
		return(hospedeSalvo.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(hospedeSalvo));
	}
	
	//Deletar hospede
	public ResponseEntity<?> deletarHospede(Long id) {
		
		try {
			
			hospedes.deleteById(id);
			
			return ResponseEntity.ok().build();
			
		}catch(Exception ex) {
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	//Atualizar hospede
	public ResponseEntity<?> atualizarHospede(Hospede hospede) {
		
		Hospede hospedeAtualizado = hospedes.save(hospede);
		
		return(hospedeAtualizado.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(hospedeAtualizado));
	}
}
