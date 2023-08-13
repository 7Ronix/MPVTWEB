import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DonateComponent } from './donate/donate.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HoroscopeComponent,
    ServicesComponent,
    ProductsComponent,
    MembersComponent,
    GalleryComponent,
    ContactComponent,
    NavbarComponent,
    CarouselComponent,
    DonateComponent,
    RegistrationComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
