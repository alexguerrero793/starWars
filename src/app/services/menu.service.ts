import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  showMenu$ = new EventEmitter<boolean>();

  constructor() { }
}
