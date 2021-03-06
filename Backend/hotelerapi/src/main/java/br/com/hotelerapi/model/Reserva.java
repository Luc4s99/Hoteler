package br.com.hotelerapi.model;

import java.util.List;

public class Reserva {

	private Long id;
	private List<Hospede> hospedes;
	private Quarto quarto;
	private int diarias;
	
	public Reserva() {
		
	}

	public Reserva(Long id, List<Hospede> hospedes, Quarto quarto, int diarias) {
	
		this.id = id;
		this.hospedes = hospedes;
		this.quarto = quarto;
		this.diarias = diarias;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Hospede> getHospedes() {
		return hospedes;
	}

	public void setHospedes(List<Hospede> hospedes) {
		this.hospedes = hospedes;
	}

	public Quarto getQuarto() {
		return quarto;
	}

	public void setQuarto(Quarto quarto) {
		this.quarto = quarto;
	}

	public int getDiarias() {
		return diarias;
	}

	public void setDiarias(int diarias) {
		this.diarias = diarias;
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
		Reserva other = (Reserva) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	//Retorna o valor total da reserva
	public Float valorTotal() {
		
		return(this.diarias * this.quarto.getDiaria());
	}
	
	//Ainda implementar
	public Reserva checkin() {
		
		return null;
	}
	
	//Ainda implementar
	public Reserva checkout() {
		
		return null;
	}
}
