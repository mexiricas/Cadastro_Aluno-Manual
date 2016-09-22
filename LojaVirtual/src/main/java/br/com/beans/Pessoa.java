package br.com.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;


@Entity
@Table(name = "pessoa")
public class Pessoa {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name = "pes_id")
	private int pes_id;
	@Column(name= "pes_nome", length = 60, nullable = true)
	private String pes_nome;
	@Column(name= "pes_cpf", length = 14, nullable = true)
	private String pes_cpf;
	@Column(name= "pes_rg", length = 20, nullable = true)
	private String pes_rg;
	@Column
	@Type(type= "date")
	private Date pes_data_nasc;
	@Column(name= "pes_rua", length = 60, nullable = true)
	private String pes_rua;
	@Column(name= "pes_bairro", length = 30, nullable = true)
	private String pes_bairro;
	@Column(name= "pes_cidade", length = 30, nullable = true)
	private String pes_cidade;
	@Column(name= "pes_uf", length = 2, nullable = true)
	private String pes_uf;
	@Column(name= "pes_cep", nullable = true)
	private int pes_cep;
	@Column(name= "pes_email", length = 40, nullable = true)
	private String pes_email;
	@Column(name= "pes_senha", length = 32, nullable = true)
	private String pes_senha;
	
	
	
	public int getPes_id() {
		return pes_id;
	}
	public void setPes_id(int pes_id) {
		this.pes_id = pes_id;
	}
	public String getPes_nome() {
		return pes_nome;
	}
	public void setPes_nome(String pes_nome) {
		this.pes_nome = pes_nome;
	}
	public String getPes_cpf() {
		return pes_cpf;
	}
	public void setPes_cpf(String pes_cpf) {
		this.pes_cpf = pes_cpf;
	}
	public String getPes_rg() {
		return pes_rg;
	}
	public void setPes_rg(String pes_rg) {
		this.pes_rg = pes_rg;
	}
	public Date getPes_data_nasc() {
		return pes_data_nasc;
	}
	public void setPes_data_nasc(Date pes_data_nasc) {
		this.pes_data_nasc = pes_data_nasc;
	}
	public String getPes_rua() {
		return pes_rua;
	}
	public void setPes_rua(String pes_rua) {
		this.pes_rua = pes_rua;
	}
	public String getPes_bairro() {
		return pes_bairro;
	}
	public void setPes_bairro(String pes_bairro) {
		this.pes_bairro = pes_bairro;
	}
	public String getPes_cidade() {
		return pes_cidade;
	}
	public void setPes_cidade(String pes_cidade) {
		this.pes_cidade = pes_cidade;
	}
	public String getPes_uf() {
		return pes_uf;
	}
	public void setPes_uf(String pes_uf) {
		this.pes_uf = pes_uf;
	}
	public int getPes_cep() {
		return pes_cep;
	}
	public void setPes_cep(int pes_cep) {
		this.pes_cep = pes_cep;
	}
	public String getPes_email() {
		return pes_email;
	}
	public void setPes_email(String pes_email) {
		this.pes_email = pes_email;
	}
	public String getPes_senha() {
		return pes_senha;
	}
	public void setPes_senha(String pes_senha) {
		this.pes_senha = pes_senha;
	}

}
