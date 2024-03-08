import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FeatureModule } from './feature/feature.module';
import { HeaderComponent } from './_layout/header/header.component';
import { CombaineComponent } from './_layout/combaine/combaine.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CombaineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FeatureModule
    // FormsModule,
    // ReactiveFormsModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
