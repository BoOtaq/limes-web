import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    dogs: any;

    constructor(
        private http: HttpClient
    ) { }
    
    ngOnInit(): void {
        this.http.get('http://localhost:3000/dogs').subscribe((data: any) => {
            this.dogs = data;
        }, (error) => {
            console.error(error)
        });

        this.http.post('http://localhost:3000/dogs', {name: "Petar onix", gender: 'female'}).subscribe((data) => {
            console.log(data);
        });
    }
}
