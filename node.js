console.log('hellow World')
let a=3
let b= 4;

const product=(x,y)=>x*y;
console.log(product(a,b))

const student={
    name:'ram',
    age:22,
    college() {
        console.log(`${this.name} college is very good`)
    }
}

student.college()