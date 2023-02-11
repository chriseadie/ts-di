import { Logger } from "./Logger"
import { Injectable } from "./decorators"
import { LibraryA } from "./LibraryA"
import { LibraryB } from "./LibraryB"

@Injectable()
export class LibraryC {

    constructor(
        private libB?:LibraryB,
        private libA?:LibraryA,
        private logger?:Logger){
    }

    public DoSomething(){
        this.logger.execute<any>(this.libA?.getData());
        this.logger.execute<any>(this.libB?.getMoreData());
    }
}