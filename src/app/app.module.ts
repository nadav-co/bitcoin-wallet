import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactsListComponent } from './cmps/contacts-list/contacts-list.component';
import { FormsModule } from '@angular/forms';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    DashboardComponent,
    MarketPriceChartComponent,
    ContactEditComponent,
    SignupComponent,
    MoveListComponent,
    MovePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgChartsAngularModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
