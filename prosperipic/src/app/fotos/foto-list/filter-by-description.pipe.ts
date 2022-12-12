import { Foto } from './../foto/foto';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByDescription'
})
export class filterByDescription implements PipeTransform{

    transform(listaFotosAPI: Foto[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery) {
            return listaFotosAPI.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return listaFotosAPI;
        }
    }

}
