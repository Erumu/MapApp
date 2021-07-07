import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPolicyComponent,
    PolicyDetailsComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
