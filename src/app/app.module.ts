import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonsComponent } from './persons/persons.component';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    NavbarComponent,
    PersonsComponent,
    NoImagePipe
  ],
  entryComponents: [],
  exports: [],
  imports: [
    BrowserModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
