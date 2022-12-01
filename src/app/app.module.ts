import { NetworkManager } from './../services/network-manager.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from 'src/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    NetworkManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
