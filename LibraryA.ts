import { Logger } from "./Logger"
import { Injectable } from "./decorators"

@Injectable()
export class LibraryA {

    constructor(private logger?:Logger){

    }

    public getData(){
        this.logger.execute<string>("I Execute On class A")
        return ["dataA","dataB"]
    }

}