## Assignments
[Initial steps](https://github.com/bertjan/a4jd-demo-app)

[Angular Cheatsheet](https://angular.io/guide/cheatsheet)

### 1. Setting up the router and navigation component
```
- Replace AppComponent's html `src/app/app.component.html` content with NavigationComponent's selector (html tag):

  Example: 
  
  <app-navigation></app-navigation>
  
- Replace the HomeComponent selector with a router outlet in NavigationComponent's template (html).
  
  Change:
    ...
      </mat-toolbar>
      <app-home></app-home>
    </mat-sidenav-content>
    
  to:
    ...
      </mat-toolbar>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
    
- Update the router config so that we can navigate between home, dashboard and table.
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
  
- Update the menu in the Navigation component so it targets the paths of the route config.

    <mat-toolbar>Menu</mat-toolbar>
    <mat-nav-list>
      <a mat-list-item href="#" routerLink="/">Home</a>
      <a mat-list-item href="#" routerLink="/dashboard">Dashboard</a>
      <a mat-list-item href="#" routerLink="/table">Table</a>
    </mat-nav-list>
```

Test if the menu successfully works.

### 2. Creating chat smart component
_Chat component will be in charge of handling the data of the chat application. This makes chat component a so-called 
"smart" component. It's a good practice to limit the amount of smart components so that logic is executed in predictable
places and not all over the place._

```
- Generate chat component.

  ng generate component chat
```

_Another trait of a "smart" component is that it is hooked up to the router and has access to routing information, making
it "smarter"._
```
- Configure the router so that the path "/chat" goes to ChatComponent.

- Add a new link to the NavigationComponent that routes to the chat.

- Test if the chat route shows: `chat works!`
```


### 3. Creating dumb components
_Dumb components are simple components that are not connected to any data source and only accept data (input) from their parent
component. Parent components can listen for events (output) emitted by the dumb component._

```
- Generate a messages component for chat

  ng g c chat/messages
  
- Generate a users component for chat

  ng g c chat/users
  
- Generate a form component for chat

  ng g c chat/form
```

_These dumb components will be controlled by the smart chat component._

### 4. Setting up a chat grid
[Docs](https://material.angular.io/components/grid-list/examples)
```

- Replace ChatComponent's template with a material grid implementation that:
  - is 3 columns wide
  - has a row height of 100px
  - contains 3 tiles in total
  - First tile has a colspan of 2 a rowspan of 4 with color 
  - Second tile has a colspan of 1 a rowspan of 4 with color 
  - Third tile has a colspan of 3 a rowspan of 1 with color 

  Here's an example grid containing 1 tile without configurations.
  
  <mat-grid-list cols="0" rowHeight="0px">
    <mat-grid-tile
      [colspan]="0"
      [rowspan]="0"
      [style.background]="'none'">
    </mat-grid-tile>
  </mat-grid-list>
```

### 5. Setting up the dumb components
```
- Insert the MessagesComponent into the first tile.
- Insert the UsersComponent into the second tile.
- Insert the FormComponent into the third tile.
```


Now it should look something like this:
```
|--------------------------------------|
|--------------------------------------|
|---messages works!-------users works!-|
|--------------------------------------|
|--------------------------------------|
|--------------------------------------|
|-------------form works!--------------|
|--------------------------------------|
```

### 6. Setting up mock data
```
- Create a new file `src/app/chat/shared/chat.model.ts`.

- Create an empty interface called ChatMessage inside the chat model file and export it.

- Add an instance member to the ChatComponent called "chatMessages" with type "ChatMessage[]" (imported from the model file).

  Example instance member:
  
  ...
  class X {
    instanceMember: Type;
    ...
  }
  
- Assign the following array of messages to chatMessages

  ...
  [
    {
      content: 'Welcome to the chat!',
      username: 'Bot',
      userId: '0',
      isUser: true
    },
    {
      content: 'John has joined the chat',
      username: 'System',
      userId: '-1',
      isUser: false
    },
    {
      content: 'Hi John!',
      username: 'Bot',
      userId: '0',
      isUser: true
    },
    {
      content: 'Hi',
      username: 'John',
      userId: '322',
      isUser: true
    },
    {
      content: `How's your day?`,
      username: 'Bot',
      userId: '0',
      isUser: true
    }
  ]
  
- Implement the empty ChatMessage interface so that it matches the data.

  Use: string and boolean.
```

### 7. Implementing MessagesComponent
[Input docs](https://angular.io/api/core/Input)
```
- Configure MessagesComponent so that it accepts chat message by creating a chatMessages variable annotated with @Input().

- Pass chatMessages to the chatMessages input binding of MessagesComponent in ChatComponent's template

  <app-messages [chatMessages]="chatMessages"></app-messages> 
  
- Update MessagesComponent's template with {{ chatMessages | json }}

- Check if you see the chatMessages on screen!

- Add a paragraph element (p) to the MessagesComponent template and implement *ngFor for chatMessages. Display the content of the message.

  Example:
  <p *ngFor="let item of items">{{item.value}}</p>
```

_Now we have data fetched by the smart ChatComponent passed down to a dumb MessagesComponent._

### 8. Implementing FormComponent
[Output docs](https://angular.io/api/core/Output)
```
- Add the FormsModule to the imports of our AppModule `src/app/app.module.ts`

  Example:
  
  import { FormsModule } from '@angular/forms';
  
    ...
    imports: [
      ...
      FormsModule
      ...
    ],
    ...

- Update FormComponent's template with a form that contains an input and a button.

- Create an empty function called onSubmit inside the ChatComponent and assign it to the form in the template like this:
  <form (ngSubmit)="onSubmit()">
 
- Change the onSubmit function so that it expects a string called text and log it (will log `undefined`).

- In FormsComponent template create a template variable called chatInput that contains the input of the form.

  Example template reference:
  
  
- Pass the value of chatInput to the onSubmit handler of the form.

  Example:
  
  <form (ngSubmit)="myFunction(myInput.value)">
  
- Test if the log shows the text of the input if submit is clicked.

- Create an EventEmitter in FormComponent called send
  
  Example:
  
  @Output()
  send = new EventEmitter<string>();
  
- Update onSubmit so that it calls the event emitter with the text it receives.

  Example: 
  
  this.send.emit(text);
  
- In ChatComponent create a function called sendMessage that expects a string called content and log it.

- Hook up sendMessage to the FormComponent in ChatMessageComponent's template.

  Example: 
  
  <my-form (send)="sendMessage($event)"></form>
```

_Now we have a dumb FormComponent communicating to smart ChatComponent as soon as a user submits a new message._

### Bonus
[Material](https://material.angular.io/components/categories)
```
- Implement a material form in FormComponent.

- Implement a material components to make Messages look nicer.

```
