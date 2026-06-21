export interface Task {
  task: string;
  id: number;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  handleCheck: (id: number) => void;
  removeTask: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
}

export interface TaskItemProps {
  item: Task;
  handleCheck: (id: number) => void;
  removeTask: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
}