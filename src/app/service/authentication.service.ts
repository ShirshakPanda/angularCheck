import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(id, password) {
    if (id === "SHIVA" && password === "11") {
      sessionStorage.setItem('id', id)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('id')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('id')
  }
}
