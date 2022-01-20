import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService, Task } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(public task: TasksService) {}

  @Get()
  getTask(): Promise<Task[]> {
    return this.task.getTasks();
  }
  @Get('/example')
  getTaskExample(@Req() req, @Res() res) {
    return res.send('Hello World');
  }

  @Get(':id')
  getSingleTask(@Param('id') id: string) {
    return this.task.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.task.CreateTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    return `Actualizando tarea: ${id}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return 'Eliminando la tarea: ' + id;
  }
}
