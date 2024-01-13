import React,{useState,useContext} from 'react';
import './Main.css'; 
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { Context } from '../Features/Context';


const AddingTask = ({ isVisible, onClose }) => {


  const {dispatch} = useContext(Context)

  const [Title, setTitle] = useState('')
  const [Description, setDescription] = useState('')
  const [Status, setStaus] = useState("Todo")
  const [StatusTodo, setStatusTodo] = useState([])
  const [StatusDoing, setStatusDoing] = useState([])
  const [StatusDone, setStatusDone] = useState([])

const HandleAddTask = ()=>{
  if (Status === "Todo" || Status === "Doing" || Status === "Done") {
    const NewTask = {
      Title,
      Description,
      Status: Status, 
    }
    dispatch({ type: "AddTasks", payload: NewTask });
    setTitle('');
    setDescription('')
    setStaus('Todo')
    if (Status === 'Todo') {
      setStatusTodo((prev) => [...prev, NewTask]);
    } else if (Status === 'Doing') {
      setStatusDoing((prev) => [...prev, NewTask]);
    } else if (Status === 'Done') {
      setStatusDone((prev) => [...prev, NewTask]);
    }
  } else {
  
    alert("Add Staus")
  }
 
  setTitle('')
  setDescription('')
  setStaus('Todo')
}



  return (
    <div className={`AddingTask ${isVisible ? 'visible' : ''}`}>
      <div className="AddingTaskContent">
        <div className="AddTaskHeader">
            <h3>Add New Task</h3>
            <MdOutlineClear className="clear" onClick={onClose}/>
        </div>
        <div className="TaskTitle">
            <label htmlFor="" >Title</label>
            <input type="text" placeholder='e.g Take coffee break' onChange={(e)=> setTitle(e.target.value)} value={Title} />
        </div>
        <div className="Description">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="20" rows="5" placeholder="e.g It's always good to have a break every once in awhile" onChange={(e)=> setDescription(e.target.value)} value={Description}/>
        </div>
        <div className="SubTask">
            <label htmlFor="">Subtasks</label>
            <div className="InputSubtasks">
                <input type="text" placeholder='e.g Make Dinner'/>
                <input type="text" placeholder='e.g Visit Friends' />
            </div>
            <button>Add New Subtask <IoMdAddCircle/> </button>
        </div>
        <div className="Status">
            <label htmlFor="">Status</label>
            <select name="" id="" onChange={(e)=>setStaus(e.target.value)}>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <button className='createBtn' onClick={HandleAddTask}>Create Task</button>
      </div>
    </div>
  );
};

export default AddingTask;
