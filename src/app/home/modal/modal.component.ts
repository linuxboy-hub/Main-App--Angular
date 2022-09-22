import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() modalEvent: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  modalEmmit() {
    this.modalEvent.emit();
  }
}
