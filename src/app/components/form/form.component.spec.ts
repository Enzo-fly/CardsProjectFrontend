import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormComponent } from './form.component';
import { TestBeanService } from 'src/app/service/data/test-bean.service';
import { EMPTY } from 'rxjs';
import { InfoEncriptionService } from 'src/app/service/info-encription.service';

describe('FormComponent', () => {
  let myComponent: FormComponent;
  let myService: TestBeanService;
  let MyEncriptionService: InfoEncriptionService;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, 
                ReactiveFormsModule,
                HttpClientTestingModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    myComponent = fixture.componentInstance;
    myService = fixture.debugElement.injector.get(TestBeanService);
    MyEncriptionService = fixture.debugElement.injector.get(InfoEncriptionService);
    fixture.detectChanges();
  });

  it('should create a component FormComponent', () => {
    expect(myComponent).toBeTruthy();
  });

  it('should be invalid when it empty', () => {
    expect(myComponent.operationFormGroup.valid).toBeFalse();
  });

  it('should be valid when it filled', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('123');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeTruthy();
  });

  it('should be invalid when field "senderNumber" has less than 16 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('123456789123456');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('123');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['senderNumber'].valid).toBeFalse();
    expect(senderNumber.errors['min']).toBeDefined;
  });

  it('should be invalid when field "senderNumber" has more than 19 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678912');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('123');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['senderNumber'].valid).toBeFalse();
    expect(senderNumber.errors['max']).toBeDefined;
  });

  it('should be invalid when field "receiverNumber" has less than 16 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('123');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('123456789123456');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['receiverNumber'].valid).toBeFalse();
    expect(receiverNumber.errors['min']).toBeDefined;
  });

  it('should be invalid when field "receiverNumber" has more than 19 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('123');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678912');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['receiverNumber'].valid).toBeFalse();
    expect(receiverNumber.errors['max']).toBeDefined;
  });

  it('should be invalid when field "senderAmount" has more than 10 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('123');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('12345678912');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['senderAmount'].valid).toBeFalse();
    expect(senderAmount.errors['max']).toBeDefined;
  });

  it('should be invalid when field "senderCvc2" has more than 3 digits', () => {
    let senderNumber = myComponent.operationFormGroup.controls['senderNumber'];
    senderNumber.setValue('12345678912345678');
    let senderDateMonth = myComponent.operationFormGroup.controls['senderDateMonth'];
    senderDateMonth.setValue(12);
    let senderDateYear = myComponent.operationFormGroup.controls['senderDateYear'];
    senderDateYear.setValue(2021);
    let senderCvc2 = myComponent.operationFormGroup.controls['senderCvc2'];
    senderCvc2.setValue('1234');
    let senderAmount = myComponent.operationFormGroup.controls['senderAmount'];
    senderAmount.setValue('1234567891');
    let receiverNumber = myComponent.operationFormGroup.controls['receiverNumber'];
    receiverNumber.setValue('12345678912345678');
    let receiverAmount = myComponent.operationFormGroup.controls['receiverAmount'];
    receiverAmount.setValue('123');
    let senderFee = myComponent.operationFormGroup.controls['senderFee'];
    senderFee.setValue('123');
    let receiverFee = myComponent.operationFormGroup.controls['receiverFee'];
    receiverFee.setValue('123');
    let phone = myComponent.operationFormGroup.controls['phone'];
    phone.setValue('1234567891');
    let receiverNotification = myComponent.operationFormGroup.controls['receiverNotification'];
    receiverNotification.setValue('true');
    let email = myComponent.operationFormGroup.controls['email'];
    email.setValue('true');
    expect(myComponent.operationFormGroup.valid).toBeFalse();
    expect(myComponent.operationFormGroup.controls['senderCvc2'].valid).toBeFalse();
    expect(senderCvc2.errors['max']).toBeDefined;
  });

  it('should call Data Service', () => {
    const mySpy = spyOn(myService, 'senderOperation').and.returnValue(EMPTY)
    myComponent.onSubmit()
    expect(mySpy).toHaveBeenCalled()
  });
  
  it('should call Encription Service', () => {
    const mySpy = spyOn(MyEncriptionService, 'encrypt')
    myComponent.onSubmit()
    expect(mySpy).toHaveBeenCalled()
  });

});
