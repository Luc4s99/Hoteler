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

import br.com.hotelerapi.model.Hospede;
import br.com.hotelerapi.service.HospedeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hospedes")
public class HospedeResource {

	@Autowired
	private HospedeService hService;
	
	//Listar todos os hospedes
	@GetMapping
	public ResponseEntity<?> listarTodosHospedes() {
		
		return(hService.listarHospedes());
	}
	
	//Listar hospede por id
	@GetMapping("/{id}")
	public ResponseEntity<?> listarHospedePorId(@PathVariable Long id) {
		
		return(hService.listarHospedePorId(id));
	}
	
	//Adicionar hospede
	@PostMapping
	public ResponseEntity<?> salvarHospede(@Valid @RequestBody Hospede hospede) {
		
		return(hService.salvarHospede(hospede));
	}
	
	//Deletar hospede
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletarHospede(@PathVariable Long id) {
		
		return(hService.deletarHospede(id));
	}
	
	//Atualizar hospede
	@PutMapping("/{id}")
	public ResponseEntity<?> atualizarHospede(@Valid @RequestBody Hospede hospede) {
		
		return(hService.atualizarHospede(hospede));
	}
}
