{
    //! abstraction 1.interface 2.abstract class
    // !idea
    // interface Vehicle {
    //     startEngine(): void;
    //     stopEngine(): void;
    //     move(): void;
    // }

    // // !real implementation
    // class Car1 implements Vehicle {
    //     startEngine(): void {
    //         console.log("Start the car engine");
    //     }
    //     stopEngine(): void {
    //         console.log("I am stop car engine");
    //     }
    //     move(): void {
    //         console.log("car engine is moving");
    //     }
    //     test(): void {
    //         console.log("I am testing");
    //     }
    // }

    // const toyotaCar = new Car1();
    // toyotaCar.startEngine();

    // ! abstract class

    abstract class Car2 {
        abstract startEngine(): void ;
        abstract stopEngine(): void ;
        abstract move(): void ;
        test(): void {
            console.log("I am testing");
        }
    }

    class fordCar extends Car2 {
        startEngine(): void {
            console.log("engine starting");
        }
        stopEngine(): void {
            console.log("engine stopping");
        }
        move(): void {
            console.log("car moving");
        }
    }

    // const hondaCar = new Car2();

    // hondaCar.startEngine();










}
