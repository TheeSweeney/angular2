import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {//OnInit is a lifecycle hook that allows us to run something whenevr the component starts up/gets initialized

  cribs: Array<any>; 
  error: string;

  constructor(
    private http: Http, 
    private cribsService: CribsService
  ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );
    
    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]//spread operator, this take info from old array and adds to new array, allowing us to put new inputs at the beginning;
    )
  }
}
