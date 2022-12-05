import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInputName', {static:true}) contentInputName: ElementRef;


  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.contentInputName.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.contentInputName.nativeElement.value
    });
  }
}
