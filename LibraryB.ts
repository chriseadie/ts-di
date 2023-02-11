import { Injectable } from "./decorators"
import { LibraryA } from "./LibraryA"

@Injectable()
export class LibraryB {
    constructor(private libA?:LibraryA){
        
    }

    public getMoreData(){
        var b = this.libA.getData()
        return {
            dataA:[1,2,3],
            context:b
        }
    }

}