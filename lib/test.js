"use strict";
// // class Dog {
// //     makeSound() {
// //         return "bark" ;
// //     }
// // }
// // class B<T> {
// //     Prop: T;
// //     constructor(TCreate: { new (): T; }) {
// //         this.Prop = new TCreate();
// //     }
// // }
// // var test = new B<Dog>(Dog);
// // console.log("test",test,  test instanceof B, test.Prop instanceof Dog, test.Prop.makeSound()) ;
// interface IActivatable {
// }
// class ClassA implements IActivatable {
//     makeSound() {
//         return "bark" ;
//     }
// }
// function activator<T extends IActivatable>(type: { new(): T ;} ): T {
//     return new type();
// }
// let classType = ClassA 
// var test = activator(ClassA);
// console.log(test.makeSound())
