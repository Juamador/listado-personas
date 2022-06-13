import { Injectable } from '@angular/core';
import { IPerson } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: IPerson[] = [];
  constructor() { }

  GetPersons(){
    this.persons = [
        {
         name: "Ing. Julisy Amador",
         occupation: "Empleado Público",
         bio: "Soy un analista y desarrollador de sistemas, con más de 5 años de experiencia en el desarrollo de aplicaciones Web",
         profileImage: "/assets/images/vt_logo_style4.png"
        } as IPerson,
        {
            name: "Homer Simpson",
            occupation: "Nuclear Safety Inspector, Former Technical Supervisor",
            bio: "Homer Jay Simpson is one of the main characters of the American animated sitcom The Simpsons. He is voiced by Dan Castellaneta and first appeared, along with the rest of his family, in The Tracey Ullman Show short 'Good Night' on April 19, 1987",
            profileImage: "/assets/images/homer.png"
        } as IPerson,
        {
            name: "Spider-Man",
            occupation: "Comic book character",
            bio: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
            profileImage: "/assets/images/spider.jpg"
        } as IPerson,
        {
            name: "Thor",
            occupation: "Film series",
            bio: "Is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility",
            profileImage: "/assets/images/thor.jpg"
        } as IPerson,
        {
            name: "Superman",
            occupation: "Film series",
            bio: "Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938)",
            profileImage: "/assets/images/super.jpg"
        } as IPerson,
        {
            name: "Thanos",
            occupation: "Marvel Cinematic Universe character",
            bio: "Thanos is a fictional character portrayed primarily by Josh Brolin via motion capture in the Marvel Cinematic Universe (MCU) media franchise, based on the Marvel Comics supervillain of the same name",
            profileImage: ""
        } as IPerson
       ];
        return this.persons;  
   }
}
