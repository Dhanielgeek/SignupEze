import React, { useContext, useState } from 'react';
import './Main.css';
import { IoMdAddCircle } from 'react-icons/io';
import 'animate.css';
import AddingTask from './AddingTask';
import { Context } from '../Features/Context';


const TaskBody = () => {
  const [Dropdown, setDropdown] = useState(false)
  const [ShowTask, setShowTask] = useState(false)
 

  const HandleShowTask = () => {
    setShowTask(!ShowTask)
    // setShowBoard(!ShowBoard)
  }


  const HandleDropdown = () => {
    setDropdown(!Dropdown)
  }

  const {state} = useContext(Context)

  const getStatusCount = (status) => {
    return state.filter((task) => task.Status === status).length;
  };
  

 


  const renderTasks = (status) => {
    const tasks = state.filter((task) => task.Status === status);
    return tasks.map((task) => (
      <div className="EachCard" key={task.id}>
        <p>{task.Title}</p>
        <p>{task.Description}</p>
      </div>
    ))
  }

  return (
    <div className={`TaskBody ${ShowTask ? 'blur' : ''}`}>
      
      <AddingTask isVisible={ShowTask} onClose={HandleShowTask} />
   
      <div className="TaskHeader">
        <div className="TaskDashText">
          <h3>Platform Launch</h3>
        </div>
        <div className="TaskInfo">
          <button onClick={HandleShowTask}>Add New Task <IoMdAddCircle /></button>
          <div className="UserInfo">
            <div className="UserNameHold" onClick={HandleDropdown}>
              D
            </div>
            {Dropdown ? (
              <div className="Logs animate__animated animate__backInDown">
                <div className="Login">Login</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="TaskProcess">
        <div className="TaskTodo">
        <div className="Taskcirle1"></div>
          TODO ({getStatusCount('Todo')})
          {/* <div className="Todolist">{renderTasks('Todo')}</div> */}
        </div>
        <div className="TaskDoing">
        <div className="Taskcirle2"></div>
          DOING ({getStatusCount('Doing')})
          {/* <div className="Doinglist">{renderTasks('Doing')}</div> */}
        </div>
        <div className="TaskComplete">
          <div className="Taskcirle3"></div>
          DONE ({getStatusCount('Done')})
          {/* <div className="Donelist">{renderTasks('Done')}</div> */}
        </div>
      </div>
      <div className="TaskList">
        <div className="Todolist">
        {renderTasks('Todo')}
        </div>
        <div className="Doinglist">
        {renderTasks('Doing')}
        </div>
        <div className="Donelist">
        {renderTasks('Done')}
        </div>
      </div>
    </div>
  );
};

export default TaskBody;
