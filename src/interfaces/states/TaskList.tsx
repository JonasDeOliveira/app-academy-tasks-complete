import { TaskResponse } from '../response/Task'

export default interface State {
    showDoneTasks: boolean;
    showAddTask: boolean;
    visibleTasks: Array<TaskResponse>;
    tasks: Array<TaskResponse>;
}