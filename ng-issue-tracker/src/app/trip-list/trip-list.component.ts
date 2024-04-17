import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent {
  public tripForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(){}

  addTrip() {
    const newTrip: Trip = {
      Name: this.tripForm.value.name
    }
    //this.trip
  }
}

interface Trip{

}