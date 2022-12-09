// Define class employee which takes an id and name during construction of object and has a salary property

class Employee {
    constructor(id, name) {
        if (!id || !name) {
            throw new Error("Employee id and name are mandatory");
        }
        this.id = id;
        this.name = name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}

const employee1 = new Employee(1, "Tchury");
employee1.setSalary(5900);
console.log(employee1.getSalary());

// MANAGER Class

class Manager extends Employee {
    setDepartment(name) {
        this.department = name;
    }

    getDepartment() {
        return this.department;
    }
}
