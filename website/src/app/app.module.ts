import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const allRoutes: Routes = [
	{ path: 'home', component: AppComponent},
	{ path: '', redirectTo:'/home', pathMatch: 'full'},
	{ path: '**', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
