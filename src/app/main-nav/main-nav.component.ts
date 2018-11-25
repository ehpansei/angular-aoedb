import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {MatDialog} from '@angular/material';
import {CreateGameModalComponent} from './create-game-modal/create-game-modal.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  opened = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private createModal: MatDialog
  ) {
  }

  openCreateGameModal(): void {
    console.log('Opening Create Game Modal');

    this.createModal.open(CreateGameModalComponent, {
      data: {}
    });
  }

}
