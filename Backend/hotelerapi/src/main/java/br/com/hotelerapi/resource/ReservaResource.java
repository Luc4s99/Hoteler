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

import br.com.hotelerapi.model.Reserva;
import br.com.hotelerapi.service.ReservaService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/reservas")
public class ReservaResource {

	@Autowired
	private ReservaService rService;
	
	@GetMapping
	public ResponseEntity<?> listarTodasReservas() {
		
		return rService.listarTodasReservas();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarReservaPorId(@PathVariable Long id) {
		
		return rService.buscarReservaPorId(id);
	}
	
	@PostMapping
	public ResponseEntity<?> salvarReserva(@Valid @RequestBody Reserva reserva) {
		System.out.println("=======^>>>>>" + reserva.getHospedes().get(0).getNome());
		return rService.salvarReserva(reserva);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletarReserva(@PathVariable Long id) {
		
		return rService.deletarReserva(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> atualizarReserva(@Valid @RequestBody Reserva reserva) {
		
		return rService.atualizarReserva(reserva);
	}
}
