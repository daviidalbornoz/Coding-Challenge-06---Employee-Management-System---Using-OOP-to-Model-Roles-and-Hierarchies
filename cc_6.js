class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name} | Department: ${this.department}`;
    }
}

// Example usage:
let emp1 = new Employee("Alice", "HR");
let emp2 = new Employee("Bob", "Engineering");

console.log(emp1.describe());
console.log(emp2.describe());