import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import {MatCardModule} from "@angular/material/card";
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './components/products/products.component';
import { ChekoutPorductsComponent } from './components/chekout-porducts/chekout-porducts.component';
import { ChekoutSubtotalComponent } from './components/chekout-subtotal/chekout-subtotal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatPseudoCheckboxModule} from "@angular/material/core";
import {AngularFireModule} from "@angular/fire";
import {firebaseConfig} from "./config/firebaseConfig";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    ChekoutPorductsComponent,
    ChekoutSubtotalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPseudoCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
