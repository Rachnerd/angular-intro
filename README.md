# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Assignments
### 1. Setting up the router and navigation component
Replace AppComponent's html content with NavigationComponent's selector (html tag).
```
<app-navigation></app-navigation>
```

Replace the HomeComponent selector with a router outlet in NavigationComponent's template (html).
```
...
    </mat-toolbar>
    <app-home></app-home>
  </mat-sidenav-content>
```

to:

```
...
    </mat-toolbar>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
```

Update the router config so that we can navigate between home, dashboard and table.
```
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'table',
    component: TalksComponent
  }
];
```

Update the menu in the Navigation component so it targets the paths of the route config.
```
    <mat-toolbar>Menu</mat-toolbar>
    <mat-nav-list>
      <a mat-list-item href="#" routerLink="/">Home</a>
      <a mat-list-item href="#" routerLink="/dashboard">Dashboard</a>
      <a mat-list-item href="#" routerLink="/table">Table</a>
    </mat-nav-list>
```

Test if the menu successfully works.
