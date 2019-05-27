import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { AuthGuard } from './shared';
import { MyToastrComponent } from './my-toastr/my-toastr.component';
import { ToastrModule } from 'ngx-toastr';
/*import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderItemsComponent } from './components/orders/order-items/order-items.component';
import { OrderService } from './shared1/order.service';*/

@NgModule({
    declarations: [
      
      MyToastrComponent,
      AppComponent,
      /*OrdersComponent,
      OrderComponent,
      OrderItemsComponent*/
      
  ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot()
    ],
    //declarations: [AppComponent, OrdersComponent,OrderComponent,OrderItemsComponent ,MyToastrComponent],
    //entryComponents:[OrderItemsComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}