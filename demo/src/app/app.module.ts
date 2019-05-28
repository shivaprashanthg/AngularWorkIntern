import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import {FormsModule} from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
//import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { AuthGuard } from './shared';
//import { MyToastrComponent } from './my-toastr/my-toastr.component';
import { ToastrModule } from 'ngx-toastr';
/*import { OrdersComponent } from './src/app/layout/components/orders/orders.component';
import { OrderComponent } from './src/app/layout/components/orders/order/order.component';
import { OrderItemsComponent } from './src/app/layout/components/orders/order-items/order-items.component';
import { OrderService } from './src/app/layout/shared/order.service';*/

@NgModule({
    declarations: [
      
      //MyToastrComponent,
      AppComponent
      /*OrdersComponent,
      OrderComponent,
      OrderItemsComponent*/
      
  ],
    imports: [
        CommonModule,
        //FormsModule,
        //BrowserModule,
        //BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        //MatDialogModule,*/
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot()
    ],
    //declarations: [AppComponent, OrdersComponent,OrderComponent,OrderItemsComponent ,MyToastrComponent],
    //entryComponents:[OrderItemsComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}