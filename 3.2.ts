{//! OPP - inheritance

    class Vehicle {

        constructor(public brand:string, public model:string){}
        displayInfo(){
            console.log(`Brand: ${this.brand} Model: ${this.model}`);
        }
    } 

    class Car extends Vehicle {
        constructor(public brand:string, public model:string, public numWheels:number){
            super(brand, model)
        }
        displayInfo(): void {
            super.displayInfo();
            console.log(`Number of wheels is ${this.numWheels}`);
        }
    }

    class Truck extends Vehicle {
        constructor(public brand:string, public model:string, public payloadCapacity:number){
            super(brand, model)
        }
        displayInfo(): void {
            super.displayInfo();
            console.log(`Payload capacity : ${this.payloadCapacity} tons`);
        }
    }


    const myCar = new Car("Toyota", "Camry", 4);
    myCar.displayInfo();
    
    const myTruck = new Truck("Ford", "F-150", 2.5);
    myTruck.displayInfo();








































}