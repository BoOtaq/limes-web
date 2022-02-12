import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  cats: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/cats').subscribe((data: any) => {
        this.cats = data;
    }, (error) => {
        console.error(error)
    });

    this.http.post('http://localhost:3000/cats', {name: "Miss Sissy", breed: 'Ulicna'}).subscribe((data) => {
        console.log(data);
    });
}
}
