import { Controller , Get , Post , Body, HttpCode} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.entity";

@Controller('employees')

export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService){}

    @Get('all')
    async getAll():Promise<Employee[]>{
        console.log("hellooo");
        
        return await this.employeeService.findAll();
    } 

    @Post('add')
    @HttpCode(201)
    async createEmployee(@Body() newEmployee:any){

        console.log(newEmployee);
        
        return this.employeeService.create(newEmployee);
    }
}