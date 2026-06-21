import type { TaskItemProps } from "../Interfaces";
import './TaskItem.scss'
const TaskItem = ({handleCheck,removeTask,handleEdit,item}:TaskItemProps)=>{
    return(
        <li key={item.id} className="taskItem">
            <div className="taskItem__left">
                <input type="checkbox" className="taskItem__checkbox" name=""  checked={item.completed} onChange={()=> handleCheck(item.id)}/> 
                <button className="taskItem__remove" onClick={()=> removeTask(item.id)}>remove</button>
                <input
                    type="text"
                    value={item.task}
                    onChange={(e) => handleEdit(item.id, e.target.value)}
                    className={`taskItem__input ${item.completed ? "taskItem__input--done" : ""}`}
                />
                </div>
            </li>
    )
}

export default TaskItem;