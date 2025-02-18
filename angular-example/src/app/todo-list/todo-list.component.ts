import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AddItemComponent } from "../add-item/add-item.component";
import { Languages, TranslatePipe } from '../translate.pipe';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [AddItemComponent, TranslatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, OnChanges, OnDestroy {
  items: string[] = ['Wow', 'Uau']
  language: Languages = 'pt'

  // ! Funções não implementadas que são apenas para exemplo
  ngOnDestroy(): void { }
  ngOnChanges(changes: SimpleChanges): void { }
  ngOnInit(): void { }

  receiveNewItem(newItem: string) {
    if (newItem == "") {
      return
    }
    
    this.items.push(newItem)
  }
}
