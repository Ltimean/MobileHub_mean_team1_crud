import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent implements OnInit {

  phoneForm: FormGroup;
  phoneId:string='';
  phoneName:string='';
  description:string='';
  OS:string='';
  storage:string='';
  camera:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.phoneForm = this.formBuilder.group({
      'phoneId' : [null, Validators.required],
      'phoneName' : [null, Validators.required],
      'description' : [null, Validators.required],
      'OS' : [null, Validators.required],
      'storage' : [null, Validators.required],
      'camera' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postPhone(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/phone-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
