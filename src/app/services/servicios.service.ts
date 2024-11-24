import { Injectable } from '@angular/core';
import { SERVICES } from '../data/mock-services';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }

  getServices() {
    return SERVICES;
  }
}
