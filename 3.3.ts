{
    //! type guards
    // type Alphanumaric = number | string;
    // const sum = (
    //     number1: Alphanumaric,
    //     number2: Alphanumaric
    // ): Alphanumaric => {
    //     if (typeof number1 === "number" && typeof number2 === "number") {
    //         return number1 + number2;
    //     } else {
    //         return number1.toString() + number2.toString();
    //     }
    // };

    // const result = sum(55, 4);
    // console.log(result);

    // ! In guard

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        console.log(`My name is ${user.name}`);
    }



    const normalUser:NormalUser = {
        name: "Mr. normal Bhai"
    }
    const adminUser: AdminUser = {
        name: "Mr. normal Bhai"
    }


    getUser(adminUser);


    // interface Squire {
    //     kind: "squire";
    //     size: number
    // }

    // interface Rectangle {
    //     kind: "rectangle";
    //     width: number;
    //     height: number;
    // }

    // type Shape = Squire | Rectangle;

    // const calculateArea = (shape: Shape) => {
    //     if("size" in shape){
    //         return shape.size * shape.size;
    //     }
    //     return shape.width * shape.height;
    // }

    // const squire:Shape =  {kind: "squire", size: 5};
    // console.log(calculateArea(squire));
    // const rectangle:Rectangle = {kind:"rectangle", width: 5, height: 5} 
    // console.log(calculateArea(rectangle));


    // interface Person {
    //     name: string,
    //     age: number
    // }

    // interface Car {
    //     brand: string,
    //     year: number
    // }

    // type Entity = Person | Car;

    // const printDetails = (entity: Entity) => {
    //     if("name" in entity){
    //         console.log(`Name: ${entity.name}; age: ${entity.age}`);
    //     }
    //     else {
    //         console.log(`Car brand : ${entity.brand}; year: ${entity.year}`);
    //     }
    // }


    // const person: Entity = {name: "John", age: 44};
    // printDetails(person);
    // const car: Entity = {brand: "Toyota", year: 2003};
    // printDetails(car)



    











}
