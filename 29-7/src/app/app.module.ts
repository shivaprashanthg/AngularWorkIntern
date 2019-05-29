// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from 'src/app/user/user.component';
import { SignUpComponent } from 'src/app/user/signup/signup.component';
//routes
import { appRoutes } from './routes';
//import { SignUpComponent } from 'src/app/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }