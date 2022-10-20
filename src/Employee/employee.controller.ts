import { Controller , Get , Post , Body, HttpCode, Put, Param, Delete} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.entity";

@Controller('employees')

export class EmployeeController {
    constructor (private readonly employeeService : EmployeeService){}

    @Post('add')
    @HttpCode(201)
    async createEmployee(@Body() newEmployee:Employee){

        console.log(newEmployee);
        
        return this.employeeService.create(newEmployee);
    }

    @Get('all')
    @HttpCode(200)
    async getAll():Promise<Employee[]>{
        return await this.employeeService.findAll();
    }
    
    @Get(':id')
    @HttpCode(200)
    async getOne(@Param('id')id:number){

        console.log('id', id)
        return await this.employeeService.findOne(id);
    }

    @Put('updateEmp/:id')
    @HttpCode(204)
    async updateEmployee(@Param('id')id :number ,@Body() updateEmployee : Employee){
        updateEmployee.id = id;
        console.log('updateEmployee', updateEmployee);
        return this.employeeService.updateEmployee(updateEmployee);
    }

    @Delete('deleteEmp/:id')
    @HttpCode(202)
    async deleteEmployee(@Param('id')id: number){
        return this.employeeService.deleteEmployee(id);
    }
}