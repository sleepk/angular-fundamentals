import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventiListResolver, CreateEventComponent
} from './events/index' ;

import {NavBarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {EventsAppComponent} from './events-app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {LoginComponent} from './user/login.component';
import {AuthService} from './user/auth.service';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventiListResolver,
    EventRouteActivatorService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    }
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// tslint:disable-next-line:typedef
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
