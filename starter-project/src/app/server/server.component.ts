import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    public serverID: number = 11;
    private serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

}