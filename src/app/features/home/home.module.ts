import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
})
export class HomeModule { }