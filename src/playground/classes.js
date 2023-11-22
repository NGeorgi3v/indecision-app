class Person {
  /**
   * @param {String} name Person name
   * @param {Number} age Person age
   */
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  /**
   * @returns {String} Greeting containing the persons name
   */
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  /**
   * @returns {String} Returns a description for the person
   */
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major = "") {
    super(name, age);
    this.major = major;
  }

  /**
   * @returns {Boolean} Returns whether the student has a major
   */
  hasMajor() {
    return !!this.major;
  }

  /**
   * @returns {String} Student's major
   */
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) description += ` Their major is ${this.major}`;

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  /**
   * @returns {Boolean} Returns whether the traveler has a home location.
   */
  hasHomeLocation() {
    return !!this.homeLocation;
  }

  /**
   * @returns {String} Returns the traveler's description
   */
  getDescription() {
    let description = super.getDescription();
    if (this.hasHomeLocation())
      description += ` They're from ${this.homeLocation}`;

    return description;
  }
}

const test1 = new Traveler("John Doe", 28, "Alabama");
console.log(test1.getDescription());
const test2 = new Traveler();
console.log(test2.getDescription());
