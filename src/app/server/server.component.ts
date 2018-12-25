import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      background-color: white;
    }`]
})
export class ServerComponent {

  serverId: number = 10;
  serverName: string = 'MDDS';
  serverStatus: string = 'active';

  constructor() {
    this.serverStatus = Math.random() > 0.6 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

  getColorClass() {
    return this.serverStatus;
  }
}
