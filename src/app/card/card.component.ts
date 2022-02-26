import { Component, OnInit, Input } from '@angular/core';
import { ServiceFavoritesService } from '../service-favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()dataEntrante:any;
  public image : string;
  constructor( private favorites: ServiceFavoritesService ) { 
    this.image="";
  }
  

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
    //console.log(this.image);
    //console.log(this.dataEntrante);
  }
  addFavorite(){
    //console.log(this.dataEntrante);
    this.favorites.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
    //console.log(this.dataEntrante);

  }

}
