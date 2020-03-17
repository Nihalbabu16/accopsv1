import { CreateDealComponent } from './create-deal/create-deal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Barchart1Component } from './dashboard/barchart1/barchart1.component';
import { Barchart2Component } from './dashboard/barchart2/barchart2.component';
import { Barchart3Component } from './dashboard/barchart3/barchart3.component';
import { Barchart4Component } from './dashboard/barchart4/barchart4.component';

const routes: Routes = [
  {path: '' , component : CreateDealComponent
  },
  {path: 'DASHBOARD' , component : DashboardComponent ,
    children : [
      {path : 'bar-chart1' , component: Barchart1Component },
      {path : 'bar-chart2' , component: Barchart2Component },
      {path : 'bar-chart3' , component: Barchart3Component },
      {path : 'bar-chart4' , component: Barchart4Component }
    ]
  },
  {path: 'USER-PROFILE' , component : CreateDealComponent
  },
  {path: 'deal' , component : CreateDealComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
