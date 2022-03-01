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
  public formData:any;
  public label:any;
  public user:any=false;

  constructor( private route: ActivatedRoute, private RestService:RestService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const { params} = paramMap;
      console.log(paramMap)
      this.cargarData(params.id)
      console.log("params_id:" , params.id)
      this.id= params.id;
      console.log("this_id:" , this.id)


    })
  }
  cargarData(id:string){
    this.RestService.get(`../assets/data/dataLibros.json/${id}`)
  }

  showForm(){
    if(this.user==true){
      this.formData = document.getElementById('formReview')?.style;
      this.formData.display='block';
    }else{
      this.label = document.getElementById('message')?.style;
      this.label.display='block';
    }
  }

}
