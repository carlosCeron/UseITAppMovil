import { Component } from '@angular/core';
import { NavController,
         NavParams, 
         ViewController,
         ToastController  } from 'ionic-angular';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
  providers: [
    Comment
  ],
})

export class CommentsPage {


  public comment: Comment;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {

    this.comment = new Comment();
    this.comment.user = {idUSer: 1, email: "email@email.com", username: "carlos"};

  }

  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
  }


  showMessage(){
     let toast = this.toastCtrl.create({
      message: 'Cooment Created Successfully!!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }


  save(tags: Array<string>){
    console.log(tags);
    this.comment.Tags = tags;

    console.log(this.comment);
    this.navCtrl.pop();
    this.showMessage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
