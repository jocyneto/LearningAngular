import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [``]
})
export class ServerComponent{
    public static serverIDStatic: number = 0;
    private serverStatus: string;
    public serverID: number;
    public static quantidadeOnline = 0;
    public static quantidadeOffline = 0;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        // this.serverID = Math.round(Math.random()*100);
        this.contadorStatusServer(this.serverStatus);
        this.serverID = ServerComponent.serverIDStatic.valueOf();
        ServerComponent.serverIDStatic++;
        console.log(this.getQuantidadeTotalServer());
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    contadorStatusServer(statusDoServidor:string){
        if (statusDoServidor === 'online') {
            ServerComponent.quantidadeOnline++;
        }else{
            ServerComponent.quantidadeOffline++;
        }
    }

    getQuantidadeTotalServer(){
        return ServerComponent.serverIDStatic;
    }

    getQuantidadeTotalServerOnline(){
        return ServerComponent.quantidadeOnline;
    }

    getQuantidadeTotalServerOffline(){
        return ServerComponent.quantidadeOffline;
    }
}