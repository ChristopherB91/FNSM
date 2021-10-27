	package com.example.FNSM.controller;

	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import com.example.FNSM.model.Person;
	import com.example.FNSM.repository.PersonRepository;


	import com.example.FNSM.exception.ResourceNotFoundException;

	@CrossOrigin(origins="http://localhost:3000")
	@RestController
	@RequestMapping("/api/")
	public class PersonController {

	@Autowired
		private PersonRepository personRepo;
	    


		//get all students
		
		@GetMapping("/allreports")
		public List<Person> getAllStudents()
		{
			
			return personRepo.findAll();
		}
		

		@PostMapping("/addreport")
	    public Person newStudent(@RequestBody Person p)
	    {
			
			return personRepo.save(p);
	    }
		
		
		@GetMapping("/report/{id}")
		public ResponseEntity<Person> getReportById(@PathVariable int id)
		{
			Person p= personRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
			return ResponseEntity.ok(p);                 
		}
		
		@GetMapping("/report/{name}")
		public List<Person> getStudentByName(@PathVariable String name)
		{
			//return studentRepo.findByName(name);
			
			List <Person> people=personRepo.findByName(name);
			if(people.isEmpty())
			{
				System.out.println(new ResourceNotFoundException("Student(s) with the name "+ name +" not found"));
			}
			
			return personRepo.findByName(name);
		}
		
		
		
		@PutMapping("/report/{id}")
		public ResponseEntity<Person> updateStudent(@PathVariable int id, @RequestBody Person report)
		{
			Person p= personRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Student not found"));
		    p.setName(report.getName());
		    p.setProblem(report.getProblem());
		    p.setLocation(report.getLocation());
		    Person updatedReport=personRepo.save(p);
		    return ResponseEntity.ok(updatedReport);
		}
		

		
		@DeleteMapping("/report/{id}")
		public String deleteStudent(@PathVariable int id)
		{
			personRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Person not found"));
		    personRepo.deleteById(id);
		    return "The person with id: "+ id +" is removed from the database.";
		}
		
	}
