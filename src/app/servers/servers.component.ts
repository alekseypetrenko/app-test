import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = "initial";
  serverCreated: boolean = false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created" + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
