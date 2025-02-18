import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { max } from 'rxjs';

@Component({
  selector: 'pag',
  imports: [],
  templateUrl: './pag.component.html',
  styleUrl: './pag.component.css'
})
export class PagComponent implements OnInit {

  @Input()
  maxPagesInput: number = 0

  crrPage: number = 0
  message: string = ""
  maxPages: number = 0

  ngOnInit() {
    this.message = "Você está na primeira página!"
    this.maxPages = this.maxPagesInput
  }

  setMaxPages(pages: number) {
    this.maxPages = pages
  }

  backPage(e: MouseEvent) {
    if (this.crrPage === 0) {
      return
    }
    else {
      this.message = "Você está na primeira página!"
      this.setPage(-1)
    }
  }

  nextPage(e: MouseEvent) {
    let maxPages = this.maxPages
    maxPages = Math.floor(maxPages)

    if (this.crrPage == maxPages) {
      return
    } else {
      this.message = "Você está na última página!"
      this.setPage(1)
    }
  }

  setPage(newPage: number) {
    this.crrPage += newPage
  }
}
