import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  /**
   * The message to show
   * @param bottomSheet
   */
  message: string;

  /**
   * The message type (error, success, warning)
   *
   * @param bottomSheet
   */
  messageType: string;

  constructor(private bottomSheet: MatBottomSheetRef<BottomSheetComponent>) { }

  ngOnInit() {
  }

}
