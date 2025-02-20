import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stars',
  imports: [ MatIconModule ],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit {
  
  notas: number[] = []

  @Input()
  nota: string = ""
  
  ngOnInit(): void {
    for (let index = 0; index < +this.nota - 1 ; index++) {
      this.notas.push(+this.nota)
    }
  }
}
