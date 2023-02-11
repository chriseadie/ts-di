import 'reflect-metadata'

export function Injectable() {
    
    return function injectionTarget<T extends { new(...args: any[]): {} }>(constructor: T): T | void {
        return class extends constructor {
            constructor(...args: any[]) {
                var providers = Reflect.getOwnMetadata('design:paramtypes',constructor)
                var deps:Array<any> = [];
                providers.forEach((Dependancy:any) => deps.push(resolveDependencies(Dependancy)))
                super(...deps);
            }
        }
    }
}


function resolveDependencies(constructor:any){
    var deps:Array<any> = [];
    var meta = Reflect.getOwnMetadata('design:paramtypes',constructor)
    if(deps.length == 0 && meta && meta.length > 0){
        meta.forEach((item:any) => {
            resolveDependencies(item);
        })
    }
    return new constructor(...deps)
}