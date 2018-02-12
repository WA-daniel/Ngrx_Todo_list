import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
/*
 * COMPONENT
 */
import {AppComponent} from './app.component';
import {ListTodoComponent} from './components/list-todo/list-todo.component';
import {HomeComponent} from './components/home/home.component';
import {DetailsComponent} from './details/details.component';
/*
 * SERVICES
 */
import {TodosService} from './services/todos.service';
/*
 * API
 */
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './backend/mock';
/*
 * MATERIAL DESIGN
 */
import {
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/*
 * ROUTES
 */
import {RouterModule} from '@angular/router';
import {routes} from './route';
/*
 * NGRX
 */
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "./reducers/todo.reducer";

@NgModule({
    declarations: [
        AppComponent,
        ListTodoComponent,
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        InMemoryWebApiModule,
        BrowserModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({todo: todoReducer}),
        RouterModule.forRoot(routes, {useHash: true}),
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
    ],
    providers: [
        TodosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
