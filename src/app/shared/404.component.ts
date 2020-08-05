import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage text-danger">This page does not exist!!</h1>`,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class Error404Component {
  constructor(){}
}
