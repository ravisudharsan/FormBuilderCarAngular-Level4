import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../Service/http-client.service';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addform:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private httpservice:HttpClientService) { }

  ngOnInit() {
    this.addform=this.fb.group({
      name:[''],
      model:['']
    });

  }

  onSubmit() {
    console.warn(this.addform.value);
    this.httpservice.addCarList(this.addform.value)
        .subscribe( data => {
          alert("Car Added successfully.");
    });
    this.router.navigate(['/carlist']);
  }
  }