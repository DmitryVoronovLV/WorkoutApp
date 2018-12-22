import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Stepcounter } from '@ionic-native/stepcounter';
import { DatePicker, DatePickerOptions} from '@ionic-native/date-picker';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  stepsMade : number;
  isWorking : number;

  constructor(private stepcounter: Stepcounter, private datePicker: DatePicker, public navCtrl: NavController) {

  };

  async getStepCount(){
    try {
      this.stepsMade = await this.stepcounter.getStepCount();
    } catch (e){
      this.stepsMade = e;
    }
  }
  
  async startCounting(){
    // this.selectedDate = await this.datePicker.show(datePickerOptions)
    this.isWorking = await this.stepcounter.start(0);
  }
  
}
