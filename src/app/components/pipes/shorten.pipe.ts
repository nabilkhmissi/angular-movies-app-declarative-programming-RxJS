import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "shorten"
})
export class ShortenPipe implements PipeTransform {

    transform(value: string) {
        return value.length > 20 ? value.substring(0, 20) + "..." : value
    }

}