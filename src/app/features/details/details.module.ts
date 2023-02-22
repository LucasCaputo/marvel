import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule
  ]
})
export class DetailsModule { }
