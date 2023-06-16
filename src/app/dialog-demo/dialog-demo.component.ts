import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css'],
})
export class DialogDemoComponent implements OnInit {
  @Input() useWorkaround: boolean;

  disableAnimation: boolean;

  constructor() {}

  ngOnInit() {
    this.disableAnimation = this.useWorkaround;
  }

  // Workaround for angular component issue #13870
  ngAfterViewInit(): void {
    // timeout required to avoid the dreaded 'ExpressionChangedAfterItHasBeenCheckedError'
    setTimeout(() => (this.disableAnimation = false));
  }
}
