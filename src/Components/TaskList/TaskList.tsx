import TaskItem from "../Taskitem/TaskItem";
interface Task {
  task: string;
  id: number;
  completed: boolean;
}
interface TaskListProps {
  tasks: Task[];
  handleCheck: (id: number) => void;
  removeTask: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
}
const TaskList = ({
  tasks,handleCheck,removeTask,handleEdit,
}: TaskListProps) => {
  return (
    <>
      {tasks.map((item) => (
        <TaskItem 
         key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          removeTask={removeTask}
          
        />
      ))}
    </>
  );
};

export default TaskList;