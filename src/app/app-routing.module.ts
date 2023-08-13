import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { MembersComponent } from './members/members.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DonateComponent } from './donate/donate.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'horoscope', component: HoroscopeComponent},
  { path: 'members', component: MembersComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'forgotpass', component: ForgotpassComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
