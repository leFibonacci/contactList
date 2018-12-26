import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user : IUser;
  
  constructor() {

  }

  ngOnInit() {
  }

}
