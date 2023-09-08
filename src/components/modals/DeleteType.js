import React, { useContext, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, ListGroup } from "react-bootstrap";
import { Context } from "../../index";

const DeleteType = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [selectedType, setSelectedType] = useState(null);

    const handleDelete = () => {
        if (!selectedType) {
            console.error('Выберите тип для удаления');
            return;
        }

        const typeIdToDelete = selectedType.id;


        fetch(`/api/type/${typeIdToDelete}`, { // Обновленный путь
            method: 'DELETE',
        })

            .then((response) => {
                if (response.status === 200) {
                    console.log('Тип успешно удален');
                    onHide();
                } else {
                    console.error(`Ошибка при удалении типа ${typeIdToDelete}`);
                }
            })
            .catch((error) => {
                console.error('Сетевая ошибка:', error);
            });
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удаление типа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {device.types.map(type =>
                        <ListGroup.Item
                            style={{ cursor: 'pointer' }}
                            active={selectedType && type.id === selectedType.id}
                            onClick={() => handleTypeClick(type)}
                            key={type.id}
                        >
                            {type.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={handleDelete}>
                    Удалить
                </Button>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteType;