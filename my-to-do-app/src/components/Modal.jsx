import React, { useEffect, useState } from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function Modal({show, onClose, onSave}) {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState("High");

    const handleSave = (() => {
        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            status: "In Progress"
        }
        if (newTask.name !== "") {
            onSave(newTask);
        } else {
            alert("Please enter the Task Name");
        }
    });

    useEffect(() => {
        if (show) {
            setTaskName("");
            setTaskDescription("");
            setTaskPriority("High");
        }
    }, [show]);

    return (
        <BootstrapModal show={show} onHide={onClose}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>Add Task</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Task Name</InputGroup.Text>
                    <Form.Control placeholder="Enter task name" value={taskName} onChange={(e) => {setTaskName(e.target.value)}}/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Task Description</InputGroup.Text>
                    <Form.Control as="textarea" placeholder="Enter task description" value={taskDescription} onChange={(e) => {setTaskDescription(e.target.value)}}></Form.Control>
                </InputGroup>
                <InputGroup className="mt-3">
                    <InputGroup.Text>Task Priority</InputGroup.Text>
                    <Form.Select value={taskPriority} onChange={(e) => {setTaskPriority(e.target.value)}}>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </Form.Select>
                </InputGroup>
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Add Task</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}