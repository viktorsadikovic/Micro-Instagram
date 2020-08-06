import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage text-danger">404 PAGE NOT FOUND</h1>`,
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
