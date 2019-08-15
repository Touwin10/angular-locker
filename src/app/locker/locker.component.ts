import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {

  public unlockSubject = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(password) {
    if (!password)
      return;
    if (password == "123456") {
      this.unlockSubject.next(true);
    }

  }

}
