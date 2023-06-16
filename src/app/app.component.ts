import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDemoComponent, { width: '500px' });
  }
}
