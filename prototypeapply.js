function Person(name) {
    this.name = name; 
}
Person.prototype.getName = function(a,b) { 
     return this.name + " " + a + " " + b; 
}

var reader = new Person('John Smith');

reader.getName = function() {

   var baseName = Object.getPrototypeOf(this).getName.apply(this,["is a", "boy"]);
   console.log("Apply: " + baseName);

   var baseName = Object.getPrototypeOf(reader).getName.call(this, "is a", "boy"); 
   console.log("Call: " + baseName);


   var baseName = Person.prototype.getName.bind(this, "is a", "boy"); 
   console.log("Bind: " + baseName());
}

reader.getName();