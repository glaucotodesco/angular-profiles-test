import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthProdService {

  constructor() { }

  getString(): string {
    return "AuthProdService";
  }
}
