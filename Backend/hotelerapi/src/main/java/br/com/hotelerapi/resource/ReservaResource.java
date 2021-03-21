package br.com.hotelerapi.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hotelerapi.model.Reserva;
import br.com.hotelerapi.service.ReservaService;

@RestController
@RequestMapping("/reservas")
public class ReservaResource {

	@Autowired
	private ReservaService rService;
	
	public ResponseEntity<?> listarTodasReservas() {
		
		return rService.listarTodasReservas();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> buscarReservaPorId(@PathVariable Long id) {
		
		return rService.buscarReservaPorId(id);
	}
	
	@PostMapping
	public ResponseEntity<?> salvarReserva(Reserva reserva) {
		
		return rService.salvarReserva(reserva);
	}
}
