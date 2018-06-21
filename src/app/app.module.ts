import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for application level routes
import { RouterModule,Routes } from '@angular/router';
//used for GET,POST,PUT
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//modal
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FireIceHttpService } from './fire-ice-http.service';
import { DetailsComponent } from './details/details.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent}
    ])

  ],
  entryComponents:[DetailsComponent],
  providers: [FireIceHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
