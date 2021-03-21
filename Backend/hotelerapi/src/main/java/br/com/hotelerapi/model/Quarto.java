package br.com.hotelerapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "quarto")
public class Quarto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private int capacidade;
	
	@NotNull
	@OneToOne
	@JoinColumn(name = "reserva_id", referencedColumnName = "id")
	private Reserva reserva;
	
	@NotNull
	private boolean ocupado;
	
	@NotNull
	private String tipo;
	
	@NotNull
	private Float diaria;
	
	public Quarto() {
		
	}

	public Quarto(Long id, int capacidade, Reserva reserva, boolean ocupado, String tipo, Float diaria) {
		
		this.id = id;
		this.capacidade = capacidade;
		this.reserva = reserva;
		this.ocupado = ocupado;
		this.tipo = tipo;
		this.diaria = diaria;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(int capacidade) {
		this.capacidade = capacidade;
	}

	public Reserva getReserva() {
		return reserva;
	}

	public void setReserva(Reserva reserva) {
		this.reserva = reserva;
	}

	public boolean isOcupado() {
		return ocupado;
	}

	public void setOcupado(boolean ocupado) {
		this.ocupado = ocupado;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Float getDiaria() {
		return diaria;
	}

	public void setDiaria(Float diaria) {
		this.diaria = diaria;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Quarto other = (Quarto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
