{
    //! OPP --- class

    // class Animal {
    //     name: string;
    //     species: string;
    //     sound: string;

    //     constructor(name:string, species: string, sound: string){
    //         this.name = name;
    //         this.sound = sound;
    //         this.species = species;
    //     }

    //     makeSound(){
    //         console.log(`The ${this.name} says ${this.sound}`);
    //     }
    // }

    // const dog = new Animal("German shepard", "dog", "Ghew Ghew");

    // const cow = new Animal("Holstein Friesian", "Cow", "Humba Humba");

    // dog.makeSound();
    // cow.makeSound();


    // ! In typescript parameter properties allow to declare and initialize class properties directly in constructor parameter.


    // class Fruits {
    //     constructor(public name: string, public color: string, public test: string){}
    //     getFruits(){
    //         console.log((`The ${this.name} is ${this.color} and test is ${this.test}`));
    //     }
    // }

    // const jackfruit = new Fruits("Jackfruit", "Green", "Sweet");
    // const tomato = new Fruits("Tomato", "Orange", "Sour")

    // jackfruit.getFruits()
    // tomato.getFruits()



    // class Country {
    //     constructor(public capital:string, public name:string, public currency:string){};
    //     getCountry(){
    //         console.log(`The ${this.capital} is the capital of ${this.name}. And currency is ${this.currency}`);
    //     }
    // }

    // const bangladesh = new Country("Dhaka", "Bangladesh", "Taka");
    // const pakistan = new Country("Islamabad", "Pakistan", "Rupee");
    // const america = new Country("Washington D.C", "America", "Dollars");
    // const turkey = new Country("Ankara", "Turkey", "Lira");

    // bangladesh.getCountry()
    // pakistan.getCountry()
    // america.getCountry()
    // turkey.getCountry()

    class Cars {
        constructor(public name:string, public color:string, public country: string){}
        getDetails(){
            console.log(`The ${this.name} of ${this.color} originated in ${this.country}`);
        }
    }

    const lamborghini = new Cars("Huracan", "Yellow", "Italy");

    lamborghini.getDetails()










}
