package com.example.FNSM.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FNSM")
public class Person {
	@Id
	private int id;
	
	private String name;
    private String problem;
    private String location;
      
    public Person()
    {
    	
    }

	public Person(int id, String name, String problem, String location) {
		super();
		this.id = id;
		this.name = name;
		this.problem = problem;
		this.location = location;
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
