import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Input() value = '';
    @Output() onTyping = new EventEmitter<string>();
    debounce = new Subject<string>();
    constructor () {}

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filtro => this.onTyping.emit(filtro));
    //.subscribe(filtro => console.log(filtro));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
