import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  basic = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickAdd() {
    this.basic = true;
  }

}
