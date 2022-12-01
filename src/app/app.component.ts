import { NetworkManager } from './../services/network-manager.service';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

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
      isChecked: false
    },
    {
      text: "Uscita",
      value: false,
      isChecked: true
    }
  ]

  constructor(
    private networkManager: NetworkManager) { }

  ngOnInit() {
    this.networkManager.post("/connect", {}).subscribe(res => console.log(res));
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy() {
    await this.networkManager.post("/disconnect", {}).subscribe(res => console.log(res));
  }

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
