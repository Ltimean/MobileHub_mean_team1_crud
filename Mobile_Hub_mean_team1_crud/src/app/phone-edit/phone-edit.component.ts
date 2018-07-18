import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

  phoneForm: FormGroup;
  id:string = '';
  phoneId:string = '';
  phoneName:string = '';
  description:string = '';
  OS:string = '';
  storage:string = '';
  camera:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPhone(this.route.snapshot.params['id']);
    this.phoneForm = this.formBuilder.group({
      'phoneId' : [null, Validators.required],
      'phoneName' : [null, Validators.required],
      'description' : [null, Validators.required],
      'OS' : [null, Validators.required],
      'storage' : [null, Validators.required],
      'camera' : [null, Validators.required]
    });
  }

  getPhone(id) {
    this.api.getPhone(id).subscribe(data => {
      this.id = data._id;
      this.phoneForm.setValue({
        phoneId: data.phoneId,
        phoneName: data.phoneName,
        description: data.description,
        OS: data.OS,
        storage: data.storage,
        camera: data.camera
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updatePhone(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/phone-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  phoneDetails() {
    this.router.navigate(['/phone-details', this.id]);
  }
}
