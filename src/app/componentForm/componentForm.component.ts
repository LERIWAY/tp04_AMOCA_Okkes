import { Component, OnInit } from '@angular/core';
import { EMPTY, empty } from 'rxjs';
import { Client } from '../Class/client';

@Component({
  selector: 'app-componentForm',
  templateUrl: './componentForm.component.html',
  styleUrls: ['./componentForm.component.css']
})
export class ComponentFormComponent implements OnInit {

  constructor() { }

  cacher : boolean = true;

  title : string = "Composant initialisé";
  valid : boolean = true;
  prenom : string = "";
  nom : string = "";
  genre : string = "";
  adresse : string = "";
  ville : string = "";
  cp : string = "";
  email : string = "";
  tel : string = "";
  pays : string = "";
  login : string = "";
  password : string = "";
  confirmPassword : string = "";

  validationPassword : boolean = true;
  cacherErreur : boolean = true;

  client !: Client;

  ngOnInit(): void {
    this.title = "Formulaire de contact";
  }

  clicChange () : void {
    if(this.confirmationPassword(this.password, this.confirmPassword) && this.login != ""){
      this.client = new Client(this.nom, this.prenom, this.adresse, this.cp, this.pays, this.ville, this.tel, this.email, this.genre, this.login, this.password, this.confirmPassword);
      this.cacher = false;
      this.valid = false;
      this.cacherErreur = true;
    }
    else{
      this.cacherErreur=false;
    }
  }

  confirmationPassword(passwordInput : String, confirmPasswordInput : String) : boolean {
    if(passwordInput != confirmPasswordInput || passwordInput =="") {
      return false;
    }
    else {
      return true;
    }
  }

  ngOnDestroy () {

  }
}
