
// without dependency injection

export class Computer {

    private processor: Processor;

    constructor(speed:string) {
        this.processor = new Processor(speed);
    }
}

// with DI

export class ComputerDI {

    //private processor: Processor;

    // constructor(processor: Processor) {
    //     this.processor = processor;
    // }

    // Short and notation for the above code
    constructor(private _processor: Processor) {        
    }
}

export class Processor {

    constructor(speed:string) {
    }

}


