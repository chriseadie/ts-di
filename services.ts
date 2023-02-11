import { Injectable } from "./decorators"

export class Container {

    public execute<T>(text:T){
        console.log(text)
    }
}

@Injectable()
export class LibraryA {

    constructor(private container?:Container){

    }

    public getData(){
        this.container?.execute<string>("I Execute On class A")
        return ["dataA","dataB"]
    }

}

@Injectable()
export class LibraryB {
    constructor(private libA?:LibraryA){
        
    }

    public getMoreData(){
        var b = this.libA?.getData()
        return {
            dataA:[1,2,3],
            context:b
        }
    }

}

type Injected<T> = T | undefined

@Injectable()
export class LibraryC {

    private readonly container:Injected<Container>
    private readonly libB:Injected<LibraryB>
    private readonly libA:Injected<LibraryA>

    constructor(libB?:LibraryB,libA?:LibraryA,container?:Container)
    {
        this.container = container;
        this.libA = libA;
        this.libB = libB;
    }

    public DoSomething(){
        this.container?.execute<any>(this.libA?.getData());
        this.container?.execute<any>(this.libB?.getMoreData());
    }
}