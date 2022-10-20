import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "./employee.entity";

@Injectable()  
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>) {};
    
    create(newEmployee){
        return this.employeeRepo.insert(newEmployee);
    }

    findAll(): Promise<Employee[]> {
        return this.employeeRepo.find();
    }

    findOne(id):Promise<Employee>{
        return this.employeeRepo.findOneById(id);
    }
    updateEmployee(updateEmployee) {
        return this.employeeRepo.update(updateEmployee.id, updateEmployee);
    }

    deleteEmployee(id) {
        return this.employeeRepo.delete(id);
    }

}

