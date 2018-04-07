import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MusicComponent } from './music/music.component';
import { AppsComponent } from './apps/apps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    MusicComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {path:'about', component: AboutPageComponent},
       {path:'music', component: MusicComponent},
       {path:'apps', component: AppsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
