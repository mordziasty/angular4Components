import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    serverServer = 40;

    getServerStatus() {
        return this.serverStatus;
    }
}
