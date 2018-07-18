import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  phone = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPhoneDetails(this.route.snapshot.params['id']);
  }

  getPhoneDetails(id) {
    this.api.getPhone(id)
      .subscribe(data => {
        console.log(data);
        this.phone = data;
      });
  }

  deletePhone(id) {
    this.api.deletePhone(id)
      .subscribe(res => {
          this.router.navigate(['/phones']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
