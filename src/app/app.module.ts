import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomepageComponent } from './other/homepage/homepage.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './other/about/about.component';
import { IndustriesComponent } from './other/industries/industries.component';
import { ContactComponent } from './other/contact/contact.component';
import { ServiceComponent } from './other/service/service.component';

const appRoutes: Routes = [
  { path: "", component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'industries', component: IndustriesComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageComponent,
    FooterComponent,
    AboutComponent,
    IndustriesComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
