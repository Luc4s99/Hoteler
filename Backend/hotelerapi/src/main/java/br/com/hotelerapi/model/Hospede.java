package br.com.hotelerapi.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "hospede")
public class Hospede extends Pessoa{
	
	@ManyToOne
	@JoinColumn(name = "reserva_id")
	private Reserva reserva;
	
	public Hospede() {
		
	}
	
	public Hospede(Long id, String nome, String endereco, String cidade, String estado, String cpf, String telefone,
			String email, String sexo, Date nascimento) {
		
		super(id, nome, endereco, cidade, estado, cpf, telefone, email, sexo, nascimento);
	}

	public Reserva getReserva() {
		return reserva;
	}

	public void setReserva(Reserva reserva) {
		this.reserva = reserva;
	}

	@Override
	public String toString() {
		return "Hospede [reserva=" + reserva + "]";
	}
	
	

}