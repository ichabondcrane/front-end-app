import { Component, OnInit } from '@angular/core';
import { QuoteList } from './quotelist.model';
import { RouterLink} from '@angular/router';


@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  quotelist: QuoteList[] = [
    new QuoteList('Randy 20x40 garage', '$40,0000', 'This is a test'),
    new QuoteList('RJ Construction', '$6,0000', 'This is a test2')
  ];

  constructor() { }

  ngOnInit() {
  }

}
