package br.com.hotelerapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.hotelerapi.model.Operador;
import br.com.hotelerapi.repository.Operadores;

@Service
public class OperadorService {

	@Autowired
	private Operadores operadores;
	
	public ResponseEntity<?> listarTodosOperadores() {
		
		List<Operador> o = operadores.findAll();
		
		return(o.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.ok(o));
	}
	
	public ResponseEntity<?> listarOperadorId(Long id) {
		
		Optional<Operador> o = operadores.findById(id);
		
		return(o.equals(null) ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.ok(o));
	}
	
	public ResponseEntity<?> salvarOperador(Operador operador) {
		
		Operador o = operadores.save(operador);
		
		return(o.equals(null) ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.ok(o));
	}
	
	public ResponseEntity<?> deletarOperador(Long id) {
		
		try {
			
			operadores.deleteById(id);
			
			return ResponseEntity.ok().build();
			
		}catch(Exception ex) {
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	public ResponseEntity<?> atualizarOperador(Operador operador) {
		
		Operador operadorAtualizado = operadores.save(operador);
		
		return(operadorAtualizado.equals(null) ? ResponseEntity.status(HttpStatus.BAD_REQUEST).build() : ResponseEntity.ok(operadorAtualizado));
	}
}
