import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css'],
})
export class DialogDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Workaround for angular component issue #13870
  disableAnimation = true;
  ngAfterViewInit(): void {
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    // setTimeout(() => this.disableAnimation = false);
  }
}
