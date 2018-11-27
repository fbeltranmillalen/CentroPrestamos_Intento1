import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { NgForm } from '@angular/forms';
import { Persona } from '../../models/persona';

declare var M: any;

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
  //providers: [EmployeeService]
})
export class PersonasComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersona()
  }

  addPersona(form: NgForm){
    if(form.value.id){
      this.personaService.putPersona(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Saved Succesfully'});
          this.getPersona(); 
        });
    }else{
      var persona = new Persona();
    persona = form.value;
    //console.log(persona);
    this.personaService.postPersona(persona)
      .subscribe(res => {
        //console.log(res);
        this.resetForm(form);
        M.toast({html: 'Saved Succesfully'});
        this.getPersona(); 
      });
    }
    
  }
  getPersona(){
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personaService.personas = res as Persona[];
        console.log(res);
      });
  }

  editPersona(persona: Persona){
    this.personaService.selectedPersona = persona;
  }

  deletePersona(id: string){
    if(confirm('Are you sure you want to delete this person?')){
      this.personaService.deletePersona(id)
      .subscribe(res => {
        M.toast({html: 'Deleted Succesfully'});
        this.getPersona();
      });
    }
    
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

}
