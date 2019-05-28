import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule} from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from 'src/app/layout/order-components/orders/orders.component';
import { OrderComponent } from 'src/app/layout/order-components/orders/order/order.component';
import { OrderItemsComponent } from 'src/app/layout/order-components/orders/order-items/order-items.component';
import { OrderService } from 'src/app/layout/shared/order.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        LayoutRoutingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientModule,
        TranslateModule,
        NgbDropdownModule,
        ToastrModule.forRoot()
    ],
    declarations: [LayoutComponent,OrdersComponent,OrderComponent,OrderItemsComponent ,SidebarComponent, HeaderComponent],
    

    entryComponents:[OrderItemsComponent],
    providers: [OrderService]
})
export class LayoutModule {}