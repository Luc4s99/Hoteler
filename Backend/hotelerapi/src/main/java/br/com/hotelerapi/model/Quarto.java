package br.com.hotelerapi.model;

import java.util.List;

public class Quarto {

	private Long id;
	private int capacidade;
	private List<Hospede> hospedes;
	private boolean ocupado;
	private String tipo;
	private Float diaria;
	
	public Quarto() {
		
	}

	public Quarto(Long id, int capacidade, List<Hospede> hospedes, boolean ocupado, String tipo, Float diaria) {
		
		this.id = id;
		this.capacidade = capacidade;
		this.hospedes = hospedes;
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

	public List<Hospede> getHospedes() {
		return hospedes;
	}

	public void setHospedes(List<Hospede> hospedes) {
		this.hospedes = hospedes;
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
