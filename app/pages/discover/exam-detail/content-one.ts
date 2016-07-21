import {Component} from "@angular/core";
import {NavParams} from "ionic-angular/index";

@Component({
  template: `
  <div text-center padding class="transparent-bg white content-container">
    <ion-icon ios="md-ionic" md="md-ionic" class="content-icon"></ion-icon>
    <h2 class="white text-div">{{question.question}}</h2>
  </div>
  `
})
export class PageOne {
  private question;

  constructor(public params:NavParams) {
    this.question = params.get("question");
  }
}