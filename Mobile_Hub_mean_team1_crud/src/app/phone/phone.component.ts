import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones: any;
  displayedColumns = ['phoneId', 'phoneName', 'OS'];
  dataSource = new PhoneDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPhones()
      .subscribe(res => {
        console.log(res);
        this.phones = res;
      }, err => {
        console.log(err);
      });
  }
}

export class PhoneDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getPhones();
  }

  disconnect() {

  }
}
