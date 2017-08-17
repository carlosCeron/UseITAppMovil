import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import {Task} from '../../models/Task';
import {CommentsPage} from '../comments/comments';
import * as moment from 'moment';


@Component({
  selector: 'page-task-project',
  templateUrl: 'task-project.html',
  providers: [
    Task
  ]
})
export class TaskProjectPage {

  selectedTask: any;
  items: Array<{title: string, note: string}>;
  public task: Task;
  month: number;
  day: number;
  year: number;

  /* constructor */

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {


    this.selectedTask = navParams.get('item');

    

    this.task = new Task();
    this.task = this.selectedTask;

    this.task.initDate =  this.selectedTask.initDate;
    this.task.endDate =  this.selectedTask.endDate;

    console.log(this.task);
    /*this.task.name = "Carlos";
    this.task.status = false;
    this.task.initDate = new Date().toISOString();
    this.task.endDate = new Date().toISOString();
    this.task.progress = 20;*/

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }

  }

  /* Methods */

  openModal(){

    let openModal = this.modalCtrl.create(CommentsPage);
    console.log("Ejecuto el Modal");
    openModal.present();
  }

  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false); 
    console.log('ionViewDidLoad TaskProjectPage');
  }

  cancel() {
        this.navCtrl.pop(); 
  } 

  formatDate(date: Date): string{

    this.month = date.getUTCMonth();
    this.day = date.getUTCDay();
    this.year = date.getUTCFullYear();

    return  this.month + "/" + this.day + "/" +  this.year; 
  }

}
