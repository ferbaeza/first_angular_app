import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public caratulaLibros : any = [];


  constructor(private RestService:RestService){
  }
  ngOnInit(): void {
    this.cargarData();
  }
  public cargarData(){
    this.RestService.get("../assets/data/dataLibros.json")
    .subscribe(response =>{
      this.caratulaLibros = response;
      console.log(response);
    })
  }

}