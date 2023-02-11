import { Injectable } from "./decorators"
import { LibraryA } from "./LibraryA"
import { Logger } from "./Logger"

@Injectable()
export class LibraryB {
    constructor(private libA?:LibraryA,private logger?:Logger){
        
    }

    public getMoreData(){
        var b = this.libA.getData()
        this.logger.execute<string[]>(b);
        return {
            dataA:[1,2,3],
            context:b
        }
    }

}