import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneComponent } from './phone/phone.component';

const appRoutes: Routes = [
  {
    path: 'phones',
    component: PhoneComponent,
    data: { title: 'Phone List' }
  },
  {
    path: 'phone-details/:id',
    component: PhoneDetailComponent,
    data: { title: 'Phone Details' }
  },
  {
    path: 'phone-create',
    component: PhoneCreateComponent,
    data: { title: 'Create Phone' }
  },
  {
    path: 'phone-edit/:id',
    component: PhoneEditComponent,
    data: { title: 'Edit Phone' }
  },
  { path: '',
    redirectTo: '/phones',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhoneDetailComponent,
    PhoneCreateComponent,
    PhoneEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
