package br.com.hotelerapi.resource;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelerapi.model.Quarto;
import br.com.hotelerapi.service.QuartoService;

@RestController
@RequestMapping("/quartos")
public class QuartoResource {

	@Autowired
	private QuartoService qService;
	
	@GetMapping
	public ResponseEntity<?> listarTodosQuartos() {
		
		return qService.listarTodosQuartos();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarQuartoPorId(@PathVariable Long id) {
		
		return qService.buscarQuartoPorId(id);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletarQuarto(@PathVariable Long id) {
		
		return qService.deletarQuarto(id);
	}
	
	@PostMapping
	public ResponseEntity<?> adicionarQuarto(@Valid @RequestBody Quarto quarto) {
		
		return qService.adicionarQuarto(quarto);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> atualizarQuarto(@Valid @RequestBody Quarto quarto) {
		
		return qService.atualizarQuarto(quarto);
	}
}
