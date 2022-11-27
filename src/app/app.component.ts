import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Budget management';
  public budgetForm = new FormGroup({
    entrataUscita: new FormControl(),
    cifra: new FormControl(),
    motivo: new FormControl()
  });

  public send() {
    const data = this.budgetForm.value;
    data.data =  new Date().toLocaleDateString();
    console.log(this.budgetForm.value);
  }
}
