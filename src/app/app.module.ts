import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from 'src/angular-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
