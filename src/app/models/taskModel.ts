export class taskModel{
  taskName: string = '';
  taskExpiringDate: Date = new Date();
  taskDescription: string = '';
  timeRemaining?: number = 0;
  status?: string;

}
