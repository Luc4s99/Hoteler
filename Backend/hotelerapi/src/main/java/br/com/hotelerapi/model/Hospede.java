package br.com.hotelerapi.model;

import java.util.Date;

public class Hospede extends Pessoa{
	
	public Hospede(Long id, String nome, String endereco, String cidade, String estado, String cpf, String telefone,
			String email, String sexo, Date nascimento) {
		
		super(id, nome, endereco, cidade, estado, cpf, telefone, email, sexo, nascimento);
	}

}
