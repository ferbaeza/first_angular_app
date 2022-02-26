import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFavoritesService {
  @Output() disparadorDeFavoritos : EventEmitter<any> = new EventEmitter();

  constructor() { }
}
