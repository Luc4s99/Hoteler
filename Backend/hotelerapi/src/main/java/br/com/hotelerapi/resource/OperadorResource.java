package br.com.hotelerapi.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelerapi.model.Operador;
import br.com.hotelerapi.service.OperadorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/operadores")
public class OperadorResource {

	@Autowired
	private OperadorService oService;
	
	//Listar todos os operadores
	@GetMapping
	public ResponseEntity<?> listarTodosOperadores() {
		
		return oService.listarTodosOperadores();
	}
	
	//Listar operador por id
	@GetMapping("/{id}")
	public ResponseEntity<?> listarOperadorId(@PathVariable Long id) {
		
		return oService.listarOperadorId(id);
	}
	
	//Salvar operador
	@PostMapping
	public ResponseEntity<?> salvarOperador(@Valid @RequestBody Operador operador) {
		
		return oService.salvarOperador(operador);
	}
	
	//Deletar operador
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletarOperador(@PathVariable Long id) {
		
		return oService.deletarOperador(id);
	}
	
	//Atualizar Operador
	@PutMapping("/{id}")
	public ResponseEntity<?> atualizarOperador(@Valid @RequestBody Operador operador) {
		
		return oService.atualizarOperador(operador);
	}
}
