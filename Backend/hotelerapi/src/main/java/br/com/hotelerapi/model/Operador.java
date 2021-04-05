package br.com.hotelerapi.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

@Entity
@PrimaryKeyJoinColumn(name = "id")
@Table(name = "operador")
public class Operador extends Pessoa{

	@NotNull
	@NotBlank
	private String usuario;
	
	@NotNull
	private String senha;
	
	@NotNull
	private String tipo;
	
	public Operador() {
		
	}
	
	public Operador(Long id, String nome, String endereco, String cidade, String estado, String cpf, String telefone,
			String email, String sexo, Date nascimento, String usuario, String senha, String tipo) {
		
		super(id, nome, endereco, cidade, estado, cpf, telefone, email, sexo, nascimento);
		this.senha = senha;
		this.usuario = usuario;
		this.tipo = tipo;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((senha == null) ? 0 : senha.hashCode());
		result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Operador other = (Operador) obj;
		if (senha == null) {
			if (other.senha != null)
				return false;
		} else if (!senha.equals(other.senha))
			return false;
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		return true;
	}
	
	//Alguns dos métodos listados no diagrama de classes se adequam melhor a classe de resource da aplicação, portanto não se encontrarão aqui
}
