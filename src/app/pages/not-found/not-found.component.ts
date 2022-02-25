import { Component, OnInit } from '@angular/core';

//SERVICE
import { MenuService} from '../../services/menu.service'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( private menuService : MenuService ) { }

  ngOnInit(){
    this.menuService.showMenu$.emit(false)
  }

}
