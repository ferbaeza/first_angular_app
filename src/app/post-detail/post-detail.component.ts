import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public id:any;
  public postData:any;

  constructor( private route: ActivatedRoute, private RestService:RestService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const { params} = paramMap;
      console.log(paramMap)
      this.cargarData(params.id)
    })
  }
  cargarData(id:string){
    this.RestService.get(`../assets/data/dataLibros.json/${id}`)
  }

}
