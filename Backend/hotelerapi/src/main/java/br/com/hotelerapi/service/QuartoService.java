package br.com.hotelerapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.hotelerapi.model.Quarto;
import br.com.hotelerapi.repository.Quartos;

@Service
public class QuartoService {

	@Autowired
	private Quartos quartos;
	
	public ResponseEntity<?> listarTodosQuartos() {
		
		List<Quarto> listaQuartos =  quartos.findAll();
		
		return(listaQuartos.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(listaQuartos));
	}
	
	public ResponseEntity<?> buscarQuartoPorId(Long id) {
		
		Optional<Quarto> q = quartos.findById(id);
		
		return(q.isPresent() ? ResponseEntity.ok(q) : ResponseEntity.noContent().build());
	}
	
	public ResponseEntity<?> deletarQuarto(Long id) {
		
		try {

			quartos.deleteById(id);
			
			return ResponseEntity.ok().build();
			
		}catch(Exception ex) {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	public ResponseEntity<?> adicionarQuarto(Quarto quarto) {
		
		Quarto quartoSalvo = quartos.save(quarto);
		
		return(quartoSalvo.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(quartoSalvo));
	}
	
	public ResponseEntity<?> atualizarQuarto(Quarto quarto) {
		
		Quarto quartoAtualizado = quartos.save(quarto);
		
		return(quartoAtualizado.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(quartoAtualizado));
	}
}
