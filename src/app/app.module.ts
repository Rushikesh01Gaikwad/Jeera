import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddprojectComponent } from './component/addproject/addproject.component';
import { ComponentModule } from './component/component.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from './component/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddprojectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ComponentModule,
    MatTabsModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
