import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CardModule
  ],
})
export class HomeModule { }