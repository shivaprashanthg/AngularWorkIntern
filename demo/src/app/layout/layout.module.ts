import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './order-components/orders/orders.component';
import { OrderComponent } from './order-components/orders/order/order.component';
import { OrderItemsComponent } from './order-components/orders/order-items/order-items.component';
import { OrderService } from './shared1/order.service';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent,OrdersComponent,OrderComponent,OrderItemsComponent ,SidebarComponent, HeaderComponent]
})
export class LayoutModule {}