import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-item',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


  @Input()
  placeholder = ""

  @Output()
  onSendInput = new EventEmitter<string>();

  currentItem = "";

  textTypes(e: KeyboardEvent) {
    if (e.key !== "Enter") {
      return
    }

    this.sendInput()
  }

  sendButtonClicked(e: MouseEvent) {
    this.sendInput()
  }

  sendInput() {
    this.onSendInput.emit(this.currentItem)
    this.currentItem = ""
  }
}
