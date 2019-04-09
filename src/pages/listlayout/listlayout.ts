import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-listlayout',
  templateUrl: 'listlayout.html',
})
export class ListlayoutPage {
  information: any[];
  content :any=[];
  items: any[];
  constructor(public navCtrl: NavController, private http: Http) {
    this.initializeItems();
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }


  initializeItems() {
      this.http.get('http://123.231.253.228/pages.php?Pg=api&tipe=2')
      .map(content => content.json())
      .subscribe(data => {
        this.information = data.content;
        console.log(data.content);

      },err => {
        console.log(err);
      }

    );

  }

  home(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();


    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.information = this.information.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
