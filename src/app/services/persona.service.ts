import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { PersonasComponent } from '../components/personas/personas.component';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  selectedPersona: Persona;
  personas: Persona[];
  readonly URL_API = 'http://localhost:3000/api/personas';

  constructor(private http: HttpClient) { 
    this.selectedPersona = new Persona();
   }

  getPersonas(){
    return this.http.get(this.URL_API);
  }

  postPersona(persona: Persona){
    return this.http.post(this.URL_API, persona);
  }

  putPersona(persona: Persona){
    return this.http.put(this.URL_API + '/' + persona.id, persona);
  }

  deletePersona(id: string){
		return this.http.delete(this.URL_API + '/' + id);
	}
}
