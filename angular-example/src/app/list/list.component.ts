import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnChanges {
  @Input()
  crrPage: number = 0

  ngOnInit(): void {
    this.showFromList()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showFromList()
  }

  items: string[] = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20"]
  title: string = "Olha nossa lista!"
  itemsToShow: string[] = []
  itemsPerPage: number = 5
  maxPages: number = Math.ceil(this.items.length / this.itemsPerPage) - 1

  showFromList() {
    let startItem = this.crrPage * this.itemsPerPage

    this.itemsToShow = []

    let end = (startItem === 0 ? this.itemsPerPage : startItem + this.itemsPerPage)

    for (let index = startItem === 0 ? 0 : startItem; index < end; index++) {
      if (this.items[index] !== undefined) {
        console.log(this.items[index])
        this.itemsToShow.push(this.items[index])
      }
      else
        break
    }
  }
}
