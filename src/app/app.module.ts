import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ListschoolComponent } from './shared/components/listschool/listschool.component';
import { SchoolDetailComponent } from './shared/components/school-detail/school-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ListschoolComponent,
    SchoolDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
