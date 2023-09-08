//Компонент для отрисовки карточки устройства
import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'; // Изменено на useNavigate
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate(); // Изменено c useHistory на useNavigate
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}> {/* Изменено на navigate */}
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.name}</div>
                    <div className="d-flex align-items-center">
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;