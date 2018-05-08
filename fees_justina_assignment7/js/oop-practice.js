// ONE ///// TWO
function Cat() {}
var cat1 = new Cat();

var Dog = function () {};
var dog1 = new Dog();


//THREE



var Animal = function () {
    "use strict";
    this.message = window.console.log("This is an animal.");
};
var pet = new Animal();
pet.message;

//FOUR
var Animal1 = function () {
    "use strict";
    this.message = function (message) {
        return window.console.log(message);
    };
};

var display = new Animal1();
display.message("This is an animal rewritten.");


//FIVE
var Animal = function (type, breed, height, color, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};

var pup = new Animal("dog", "pug", "fawn", "short", "fat");

window.console.log(pup.type, pup.breed, pup.color, pup.height, pup.length);

//SIX

var Animal = function (type, breed, height, color, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};

var animal = new Animal("dog", "pug", "fawn", "short", "fat");
for (var prop in animal) {
    window.console.log(prop);
}

//SEVEN
var Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

Animal.prototype.speak = function() {
    "use strict";
    if (this.type === "cat") {
        window.console.log("The " + this.color + " cat is meowing");
    } else if (this.type === "dog") {
        window.console.log("The " + this.color + " dog is barking");
    }
};

var petOne = new Animal("dog", "pug", "fawn", "short", "fat");
var petTwo = new Animal("cat", "pug", "black", "2", "3");

petOne.speak();
petTwo.speak();


//EIGHT

var Animal = function (type, breed, color, height, length) {
    "use strict";
    var type, breed, color, height, length;
    
    var checkType = function () {
        if (type === "cat") {
            return "cat";
        } else {
            return "dog";
        }
    };
    
   this.speak = function() {
        window.console.log("The " + checkType() + " made noise!");
    }
};

var petThree = new Animal("dog", "pug", "fawn", "short", "fat");
var petFour = new Animal("cat", "pug", "black", "2", "3");

petThree.speak();
petFour.speak();


//NINE

String.prototype.findWords = function() {
    var word = "to";
    var countWord = this.split(" ");
    var count = 0;
    
    for (var i = 0; i < countWord.length; i = i + 1) {
        if (countWord[i] === word) {
            count += 1;
        }
    }
    window.alert("The word 'to' " + "appeared " + count + " times in the paragraph.");
}

var paragraph = "Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.";

paragraph.findWords();






