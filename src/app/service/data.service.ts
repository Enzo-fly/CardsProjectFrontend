import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from '../item/operation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private testBeanUrl = 'http://localhost:8080/api/testOperation';
  private postOperationUrl = 'http://localhost:8080/api/CardOperations';

  constructor(private httpClient: HttpClient) { }

  senderOperation(operation: Operation){
    let headerString = this.createHttpHeader()
    let headers = new HttpHeaders({
        Authorization: headerString
    })
    return this.httpClient.post<Operation>(this.postOperationUrl, operation, {headers, observe: 'response'},);
  }

  createHttpHeader(){
    let username = 'user'
    let password = 'password'
    let headerString = 'Basic ' + window.btoa(username + ':' + password)
    return headerString;
  }
}
