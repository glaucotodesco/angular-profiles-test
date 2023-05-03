import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {

  constructor() { }

  getString(): string {
    return "AuthMockService";
  }
}
