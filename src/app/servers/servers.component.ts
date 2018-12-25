import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  platformStatus = 'No server is created!';
  serverName = '';
  serverAdded: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 45000);
  }

  ngOnInit() {
  }

  onCreeateServer() {
    this.serverAdded = true;
    this.platformStatus = 'Server created successfully!';
  }

  onAddingServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
