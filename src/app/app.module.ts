import { NetworkManager } from './../services/network-manager.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from 'src/angular-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    NetworkManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
