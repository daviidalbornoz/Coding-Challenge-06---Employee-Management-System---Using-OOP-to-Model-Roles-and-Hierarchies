class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name} | Department: ${this.department}`;
    }
}

/* Example usage:
let emp1 = new Employee("Alice", "HR");
let emp2 = new Employee("Bob", "Engineering");

console.log(emp1.describe());
console.log(emp2.describe());
*/

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Overriding the parent describe() method
  describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
  }
}

/* Example usage:
let mgr1 = new Manager("Charlie", "Sales", 5);
console.log(mgr1.describe());
*/


let emp1 = new Employee("John Krasinski", "Finance");
let emp2 = new Employee("Emily Blunt", "IT");

let mgr1 = new Manager("Meghan Markle", "IT", 6);
let mgr2 = new Manager("Prince Harry", "Marketing", 3);

/* Displaying employee details
console.log(emp1.describe());
console.log(emp2.describe());
*/

/* Displaying manager details
console.log(mgr1.describe());
console.log(mgr2.describe());
*/

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (const employee of this.employees) {
      console.log(employee.describe());
    }
  }
}

// Example usage:
let myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();