import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
