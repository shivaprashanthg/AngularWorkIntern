import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
//import { AlertComponent } from './alert/alert.component';
//import { NotificationComponent } from './notification/notification.component';
import { MyToastrComponent } from './my-toastr/my-toastr.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot()
    ],
    declarations: [AppComponent,   MyToastrComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}