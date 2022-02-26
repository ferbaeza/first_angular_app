import { Component, OnInit } from '@angular/core';
import { ServiceFavoritesService } from '../service-favorites.service';

@Component({
  selector: 'app-favorite-sidebar',
  templateUrl: './favorite-sidebar.component.html',
  styleUrls: ['./favorite-sidebar.component.css']
})
export class FavoriteSidebarComponent implements OnInit {

  constructor( private favorites: ServiceFavoritesService ) { }
  public listaFavorites:Array<any> = [];

  ngOnInit(): void {
    this.favorites.disparadorDeFavoritos.subscribe(data => {
        console.log("Recibiendo data: ", data);
        this.listaFavorites.push(data);
        console.log(data);
        console.log(this.listaFavorites)
    })
  }

}
