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

  useWorkaround: boolean = false;
  refreshing: boolean = false;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const componentRef = this.dialog.open(DialogDemoComponent, {
      width: '500px',
    });
    componentRef.componentInstance.useWorkaround = this.useWorkaround;
  }

  change() {
    this.refreshing = true;
    setTimeout(() => {
      this.refreshing = false;
    }, 10);
  }
}
