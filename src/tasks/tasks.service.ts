import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task extends Document {
  id?: number;
  title: string;
  description: string;
  done: boolean;
}
@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private TaskModel: Model<Task>) {}

  async getTasks() {
    return await this.TaskModel.find();
  }

  async getTask(id: string) {
    return await this.TaskModel.findById(id);
  }

  async CreateTask(task: CreateTaskDto) {
    const newtask = new this.TaskModel(task);
    return await newtask.save();
  }
}
