// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reactive form for generate and validate the form
import { ReactiveFormsModule } from '@angular/forms';

// primeng components
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // <- import here
    InputTextModule, // <- import here
    ButtonModule, // <- import here
    CardModule, // <- import here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
