class Movie{
    constructor(title,studio,rating){
            this.title = title;
            this.studio= studio;
            this.rating = rating;};

get MovieTitle(){
    return this.title;
}
get MovieStudio(){
    return this.studio;
}
get MovieRating(){
    return this.rating;
}
set MovieTitle (title){
    this.title = title;
}
set MovieStudio (studio){
    this.studio = studio;
}

set Movierating (rating){
    this.rating = rating;
}
get overall (){
    return `Movie: ${this.MovieTitle} , production: ${this.MovieStudio} , Rating: ${this.MovieRating}`
}
};
 
  
let objM= new Movie("Casino Royale","Eon Production","PG13");
 console.log(objM.overall);
//output;
//Movie: Casino Royale , production: Eon Production , Rating: PG13

//circle
class Circle {
constructor(radius,color){
    this.radius = radius;
        this.color = color;
}
get radiusCircle(){
return this.radius;
}
get colorCircle(){
    return this.color;
}
set radiusCircle(radius){
    this.radius= radius;
}

set colorCircle(color){
    this.color= color;
}
get toString(){
    return `Circle[radius = ${this.radius}, color = ${this.color}]`;
}

get areaCircle(){
    return Math.PI * this.radius*this.radius;
}
get circumferenceCircle(){
    return 2 * Math.PI * this.radius; 
}
}

let obj = new Circle(1.0,"blue");
console.log(obj.toString);
//output;
// Circle[radius = 1, color = blue]
console.log(obj.areaCircle.toFixed(2));
//output;
// 3.14;
console.log(obj.circumferenceCircle.toFixed(2));
//output;
//6.28

class Person {
    constructor(name,age,gender,nationality,job){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.nationality = nationality;
            this.job = job; }

get personname (){
    return this.name;
}

get personage (){
    return this.age;
}

get persongender (){
    return this.gender;
}

get personnationality (){
    return this.nationality;
}
get personjob (){
    return this.job;
}

set personname (name){
    this.name = name;
}

set personage (age){
    this.age = age;
}

set persongender (gender){
    this.gender = gender;
}

set personnationality (nationality){
    this.nationality = nationality;
}

set personjob (job){
    this.job = job;
}

get profile (){
    return `
            name:${this.name}
            age:${this.age}
            gender:${this.gender}
            nationality:${this.nationality}
            job:${this.job}`; 
}

}

let objP = new Person("coder",26,"male","Indian","Full stack developer");

console.log(objP.profile);
//output;