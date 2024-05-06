{//! polymorphism

class Person {
    getSleep(){
        console.log(`Normal person sleep 8 hours a day`);
    }
}

class Student extends Person {
    getSleep(): void {
        console.log(`Student sleep 7 hours a day`);
    }
}

class Developer extends Person {
    getSleep(): void {
        console.log(`Developer sleep 6 hours a day`);
    }
}

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// person1.getSleep();
// person2.getSleep();
// person3.getSleep();


class Shape {
    getArea():number{
        return 0;
    }
}


// ! Circle
class Circle extends Shape {
    radius: number;
    constructor(radius:number){
        super()
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


// ! Rectangle
class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height:number, width:number){
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}


const getShapeArea = (param: Shape) =>{
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 10);

getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)























}