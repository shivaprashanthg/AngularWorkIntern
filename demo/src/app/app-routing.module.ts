import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
//import { OrdersComponent } from './layout/order-components/orders/orders.component';
//import { OrderComponent } from './layout/order-components/orders/order/order.component';

const routes: Routes = [
      
    { path: '', loadChildren: './layout/layout.module#LayoutModule' , canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'pagenotfound', loadChildren: './pagenotfound/pagenotfound.module#NotFoundModule' },
    { path: '**', redirectTo: 'pagenotfound' },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}  