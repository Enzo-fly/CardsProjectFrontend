import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TestBeanService} from "../../service/data/test-bean.service";
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
    // private testService: TestBeanService,
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

  getTestBean() {
    //console.log("test the button");
    //console.log(this.dataService.providerTestBean());
    this.dataService.providerTestBean().subscribe(
        response => this.processTestInformation(response)

    );
  }
  processTestInformation(response){
    this.myMessage = response.senderAmount;
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
    this.requestStatus='1111'
    if(this.operationFormGroup.invalid){
      this.operationFormGroup.markAllAsTouched()
    }
    else{
      this.dataService.senderOperation(myOperation).subscribe(
        //response => console.log(response),
        response =>this.handlerResponse(response),
        error => this.handlerError(error)
        //error => console.log(error.ok) 
      )
    }

    //this.router.navigate(['info', this.requestStatus])
      
   }
  handlerError(error){
    //this.requestStatus=error.ok
    //this.requestStatus='1111'
    console.log('handlerError начал работу')
    console.log('Статус отчета: '+this.requestStatus)
    console.log(error.status)
    console.log(error.ok)
    console.log(error.name)
    console.log(error.message)
    this.requestStatus=error.name
    this.router.navigate(['info', this.requestStatus])
    console.log('handlerError закончил работу')
  }
  handlerResponse(response){
    console.log('handlerResponse начал работу')
    console.log(response)
    this.requestStatus=response.status
    this.router.navigate(['info', this.requestStatus])
    console.log('handlerResponse закончил работу')
  }
  
}

