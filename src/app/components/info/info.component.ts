import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  requestStatus:string
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
   this.operationConformation(this.requestStatus)
  }

  operationConformation(requestStatus){
    this.requestStatus=this.route.snapshot.params['requestStatus']
    if(this.requestStatus=='200'){
      this.requestStatus='Операция была выполнена, ответ сервера: '+this.requestStatus
    }
    else{
      this.requestStatus='Операция не была выполнена, ответ сервера: '+this.requestStatus
    }
  }

  moveBack(){
    this.router.navigate(['form'])
  }
}
