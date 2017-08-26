import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @Input() user;
  @Output() didInit = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.didInit.emit(true);
  }

}
