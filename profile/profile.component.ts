import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  
  mstatus: string[] = [
    'single',
    'married'
  ];

  // constructor(public fb :FormBuilder) { }

  myForm= new FormGroup({
    firstName:new FormControl('',Validators.required),
  lastName:new FormControl(''),
  status:new FormControl(''),
  address : new FormGroup({
    street : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl('')

  })

  });

  // myForm=this.fb.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   status:[''],
  //   address : this.fb.group({
  //     street:[''],
  //     city:[''],
  //     state:['']
  //   })
   
  // })
  

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
 
  // refresh(){
  //   firstName="";
  //   lastName="";
    
  // }
}
