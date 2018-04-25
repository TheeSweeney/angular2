import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {//OnInit is a lifecycle hook that allows us to run something whenevr the component starts up/gets initialized

  cribs: Array<any>; 

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('data/cribs.json')
      .map( res => res.json())
      .subscribe(
        data => console.log(data)
      )
  }

}
