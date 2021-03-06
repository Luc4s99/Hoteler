package br.com.hotelerapi.model;

import java.util.Calendar;
import java.util.Date;

public class Pessoa {

	private Long id;
	private String nome;
	private String endereco;
	private String cidade;
	private String estado;
	private String cpf;
	private String telefone;
	private String email;
	private String sexo;
	private Date nascimento;
	
	public Pessoa(Long id, String nome, String endereco, String cidade, String estado, String cpf, String telefone,
			String email, String sexo, Date nascimento) {
		
		this.id = id;
		this.nome = nome;
		this.endereco = endereco;
		this.cidade = cidade;
		this.estado = estado;
		this.cpf = cpf;
		this.telefone = telefone;
		this.email = email;
		this.sexo = sexo;
		this.nascimento = nascimento;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
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
		Pessoa other = (Pessoa) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	// Função que retorna a idade do hóspede segundo sua data de nascimento
		public int idade() {
			
			Calendar dataNascimento = Calendar.getInstance();  
			dataNascimento.setTime(this.nascimento); 
		    Calendar hoje = Calendar.getInstance();  

		    int idade = hoje.get(Calendar.YEAR) - dataNascimento.get(Calendar.YEAR); 

		    if (hoje.get(Calendar.MONTH) < dataNascimento.get(Calendar.MONTH)) {
		      idade--;  
		    } 
		    else if (hoje.get(Calendar.MONTH) == dataNascimento.get(Calendar.MONTH) && hoje.get(Calendar.DAY_OF_MONTH) < dataNascimento.get(Calendar.DAY_OF_MONTH)) { 
		           
		    	idade--; 
		    }

		    return idade;
		}
}
