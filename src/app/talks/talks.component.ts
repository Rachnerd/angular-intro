import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TalksDataSource } from './talks-datasource';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TalksDataSource;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'id', 'price'];

  constructor(private apollo: Apollo) {
  }


  ngOnInit() {
    this.dataSource = new TalksDataSource(this.paginator, this.sort, this.apollo,
      gql`
              query Products($page: Int, $size: Int, $sortColumn: String, $sortDirection: String) {
                  products(page: $page, size: $size, sortColumn: $sortColumn, sortDirection: $sortDirection) {
                    name,
                    id, 
                    price
                  }
              }
            `);
  }
}
