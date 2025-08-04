import React, { useState } from "react";
import taskIcon from "../../public/Google_Tasks.svg"
import Modal from "./Modal";

export default function Todo() {
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    const [search, setSearch] = useState("");

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    // Добавление новой задачи в таблицу
    const handleSaveModal = (newTask) => {
        setTasks([...tasks, newTask]);
        handleCloseModal();
    }

    // Удаление задачи
    const handleDeleteTask = (taskIndex) => {
        const updatedTasks = tasks.filter(
            (item, index) => taskIndex !== index
        )
        const clarify = confirm("Are you sure you want to delete the task?");

        if (clarify) {
            setTasks(updatedTasks);
        }
    }
    
    // Изменение задачи
    const handleEditTask = () => {
        handleOpenModal();
    }

    // Завершение задачи
    const handleCompleteTask = (taskIndex) => {
        const notCompletedTasks = tasks.filter(
            (item, index) => taskIndex !== index
        );
        setTasks(notCompletedTasks);
    }
    
    return (
        <div className="bg-white rounded shadow-lg p-5 w-75 mh-75">
            <div className="d-flex justify-content-center align-items-center">
                <img className="w-25" src={taskIcon} alt="Task Icon"></img>
                <h1 className="justify-self-center">To-Do App</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center m-3">
                <button className="btn btn-primary btn-lg" onClick={handleOpenModal}>+ Add Task</button>
                <input type="text" className="form-control w-25" placeholder="Search Task..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <select className="form-select h-25 w-25">
                    <option>All</option>
                    <option>In Progress</option>
                    <option>Complete</option>
                </select>
                <select className="form-select h-25 w-25" id="prioritySort">
                    <option>None</option>
                    <option>High to Low</option>
                    <option>Low to High</option>
                </select>

            </div>
            <div className="mt-5">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Task Name</th>
                            <th scope="col">Task Description</th>
                            <th scope="col">Task Priority</th>
                            <th scope="col">Task Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {tasks.filter((task) => (
                            search.toLowerCase() === "" ? task : task.name.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)
                        )).map((task, index) => (
                            <tr key={index}>
                                <th scope="row">{task.name}</th>
                                <td>{task.description}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                <td className="d-flex justify-content-around">
                                    <button className="btn btn-success" onClick={() => handleCompleteTask(index)}>Complete</button>
                                    <button className="btn btn-warning" onClick={handleEditTask}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onClose={handleCloseModal} onSave={handleSaveModal}></Modal>
        </div>
    );
}
