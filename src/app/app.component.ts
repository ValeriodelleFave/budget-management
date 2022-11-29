import { NetworkManager } from './../services/network-manager.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Budget management';
  public budgetForm = new FormGroup(
    {
      incomeExpense: new FormControl(true,
        {
          validators: Validators.required
        }
      ),
      moneyNumber: new FormControl(null,
        {
          validators: Validators.required
        }
      ),
      motivation: new FormControl(null,
        {
          validators: Validators.required
        }
      )
    }
  );
  public radioButtonOptions = [
    {
      text: "Entrata",
      value: true,
      isChecked: true
    },
    {
      text: "Uscita",
      value: false,
      isChecked: false
    }
  ]

  constructor(private networkManager: NetworkManager) { }

  public send() {
    const data = this.budgetForm.value;
    data.date = new Date().toLocaleDateString();

    // TODO: Effettuare chiamate REST al BE
    this.networkManager.post("/", data).subscribe(res => console.log(res))
    if (this.budgetForm.valid) {
      console.log(data)
    } else {
      console.error(data)
    }
  }
}
