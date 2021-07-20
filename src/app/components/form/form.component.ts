import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Operation} from "../../item/operation";
import { InfoEncriptionService } from 'src/app/service/info-encription.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  operationFormGroup: FormGroup;
  myMessage: any;
  myOperation: Operation;
  requestStatus: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private infoEncriptionService: InfoEncriptionService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.operationFormGroup= this.formBuilder.group({
        senderNumber: ['', [Validators.required,
                            Validators.pattern("^[0-9]*$"),
                            Validators.minLength(16),
                            Validators.maxLength(19),]],
        senderDateMonth: ['', ],
        senderDateYear: ['', ],
        senderCvc2: ['', [Validators.required,
                          Validators.maxLength(3)]],
        id: [''],
        senderAmount: ['', [Validators.required,
                            Validators.maxLength(10)]],
        receiverNumber: ['', [Validators.required,
                              Validators.pattern("^[0-9]*$"),
                              Validators.minLength(16),
                              Validators.maxLength(19),]],
        receiverAmount: [''],
        senderFee: [''],
        receiverFee: [''],
        phone: [''],
        receiverNotification: [false],
        email: [false]
    });
  }

  onSubmit() {
    let myOperation = new Operation();
    myOperation.senderNumber=this.operationFormGroup.controls['senderNumber'].value;
    myOperation.senderDate=this.operationFormGroup.controls['senderDateMonth'].value+this.operationFormGroup.controls['senderDateYear'].value;
    myOperation.senderCvc2=this.operationFormGroup.controls['senderCvc2'].value;
    myOperation.senderAmount=this.operationFormGroup.controls['senderAmount'].value;
    myOperation.receiverNumber=this.operationFormGroup.controls['receiverNumber'].value;
    myOperation.receiverNotification=this.operationFormGroup.controls['receiverNotification'].value;
    myOperation.email=this.operationFormGroup.controls['email'].value;
    myOperation.phone=this.operationFormGroup.controls['phone'].value;

    myOperation.senderNumber=this.infoEncriptionService.encrypt(myOperation.senderNumber);
    myOperation.receiverNumber=this.infoEncriptionService.encrypt(myOperation.receiverNumber);
    
    if(this.operationFormGroup.invalid){
      this.operationFormGroup.markAllAsTouched()
    }
    else{
      this.dataService.senderOperation(myOperation).subscribe(
        response =>this.handlerResponse(response),
        error => this.handlerError(error)
      )
    }
      
   }
  handlerError(error){
    this.requestStatus=error.name
    this.router.navigate(['info', this.requestStatus])
  }
  handlerResponse(response){
    this.requestStatus=response.status
    this.router.navigate(['info', this.requestStatus])
  }
  
}

