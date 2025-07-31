import React, { useState } from "react";
import taskIcon from "../../public/Google_Tasks.svg"
import Modal from "./Modal";

export default function Todo() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    return (
        <div className="bg-white rounded shadow-lg p-5 w-75 h-75">
            <div className="d-flex justify-content-center align-items-center">
                <img className="w-25" src={taskIcon} alt="Task Icon"></img>
                <h1 className="justify-self-center">To-Do App</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center m-3">
                <button className="btn btn-primary btn-lg" onClick={handleOpenModal}>+ Add Task</button>
                <input type="text" className="form-control w-25" placeholder="Search Task..."></input>
                <select className="form-select h-25 w-25">
                    <option>All</option>
                    <option>In Progress</option>
                    <option>Complete</option>
                </select>
                <select className="form-select h-25 w-25">
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
                            <th scope="col">Task Status</th>
                            <th scope="col">Task Priority</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">Task 1</th>
                            <td>This is a task to do</td>
                            <td>In Progress</td>
                            <td>High</td>
                            <td className="d-flex justify-content-around">
                                <button className="btn btn-success">Complete</button>
                                <button className="btn btn-warning">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onClose={handleCloseModal}></Modal>
        </div>
    );
}
