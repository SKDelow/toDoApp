import { Component, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
//  import { NavController,  } from '@ionic/angular';
 import { NavController, AlertController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login.page';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList = [];
  taskName: string;
  // Kinda different from tutorial, kept getting errors when following tutorial
  @ViewChild('input', { static: false }) searchbar: IonSearchbar;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afAuth: AngularFireAuth, public app : App, public firestore: AngularFirestore) {

  }


  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
    // I had to do it this way to make autofucus works, the tutorial wasnt working
    setTimeout(() => this.searchbar.setFocus(), 500);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
    setTimeout(() => this.searchbar.setFocus(), 500);
  }

  async updateTask(index) {
    let alert = await this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: data => {
          this.taskList[index] = data.editTask;
        }
      }
      ]
    });
    await alert.present();
  }
  logout() {
    return this.afAuth.auth.signOut().then(authData => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

}

  //Didnt Work not sure why
  // ionViewDidLoad() {
  //   setTimeout(() => {
  //     this.searchbar.setFocus();
  //   }, 350);
  // }



