import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

export default function Modal({show, onClose}) {
    return (
        <BootstrapModal show={show} onHide={onClose}>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>Add Task</BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>

            </BootstrapModal.Body>
            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary">Save Task</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}