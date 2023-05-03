import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDevService {

  constructor() { }

  getString(): string {
    return "AuthDevService";
  }
}
