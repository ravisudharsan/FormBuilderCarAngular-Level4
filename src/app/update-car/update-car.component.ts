import { Component, OnInit } from '@angular/core';
import {HttpClientService, Car} from '../service/http-client.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  car:Car;
  updateform:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private httpservice:HttpClientService) { }

  ngOnInit() {
    let carId = localStorage.getItem("carId");
    alert(carId);
    this.updateform = this.fb.group({
      id: [],
      name: [''],
      model: ['']
    });
    this.httpservice.getUserById(carId)
      .subscribe( data => {
        this.updateform.setValue(data);
      });
  }

  submitCar(){
    this.httpservice.updateCarList(this.updateform.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/carlist']);
        },
        error => {
          alert(error);
        });
  }
}
