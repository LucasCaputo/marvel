import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

  breadcrumbs: {label: string, url: string}[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {    
    this.activatedRoute?.firstChild?.data.subscribe((el => this.breadcrumbs = el['breadcrumbs']));
  }

}
