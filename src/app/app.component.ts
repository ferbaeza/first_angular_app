import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-angular';
  public caratulaLibros : Array<any> = [];

  ngOnInit(): void {
    this.caratulaLibros=[
      {
        title:'Titulo 1', 
        subtitle:'Info card n-1', 
        img: 'https://picsum.photos/536/354'
      },
      {
        title:'Titulo 2', 
        subtitle:'Info card n-2', 
        img: 'https://picsum.photos/536/354'

      },
      {
        title:'Titulo 3', 
        subtitle:'Info card n-3', 
        img: 'https://picsum.photos/536/354'

      },
      {
        title:'Titulo 4', 
        subtitle:'Info card n-4',
        img: 'https://picsum.photos/536/354'
 
      },
      {
        title:'Titulo 5', 
        subtitle:'Info card n-5',
        img: 'https://picsum.photos/536/354'
 
      }
    ]
  }

}