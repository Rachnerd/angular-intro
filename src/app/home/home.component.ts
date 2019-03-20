import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { FormControl, Validators } from '@angular/forms';

const BookQuery = gql`
  query Book($id: ID) {
    book(id: $id) {
      title
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book: any;

  @ViewChild('input') input: ElementRef;
  @ViewChild('button') button: ElementRef;

  private querySubscription: Subscription;
  bookId = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.bookId.hasError('required') ? 'You must enter a value' :
        '';
  }
  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.input.nativeElement.value = '1';
    this.getBook(this.input.nativeElement.value);
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  getBook(id) {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }

    this.querySubscription = this.apollo.watchQuery<any>({
      query: BookQuery,
      variables: {
        id,
        page: 1,
        pageSize: 20,
      },
      fetchPolicy: 'no-cache',

    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this.book = data.book;
      });
  }

}
