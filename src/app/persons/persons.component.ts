import { Component, OnInit } from '@angular/core';
import { IPerson } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: IPerson[] = [];
  constructor(public srvPerson: PersonService) { }

  ngOnInit(): void {
    this.GetPersons();
  }

  GetPersons(){
    this.persons = this.srvPerson.GetPersons();
  }

  Delete(item: IPerson){
    this.persons = this.persons.filter(x=> x.name !== item.name);
  }
}
