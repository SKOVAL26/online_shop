//Страница админ панели
import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteDevice from "../components/modals/DeleteDevice";
import DeleteType from "../components/modals/DeleteType";

const Admin = () => {
    const [addBrandVisible, setAddBrandVisible] = useState(false);
    const [addTypeVisible, setAddTypeVisible] = useState(false);
    const [addDeviceVisible, setAddDeviceVisible] = useState(false);
    const [deleteBrandVisible, setDeleteBrandVisible] = useState(false);
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false);
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAddTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAddBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setAddDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteTypeVisible(true)}
            >
                Удалить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteBrandVisible(true)}
            >
                Удалить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeleteDeviceVisible(true)}
            >
                Удалить устройство
            </Button>
            <CreateBrand show={addBrandVisible} onHide={() => setAddBrandVisible(false)} />
            <CreateDevice show={addDeviceVisible} onHide={() => setAddDeviceVisible(false)} />
            <CreateType show={addTypeVisible} onHide={() => setAddTypeVisible(false)} />
            <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />
            <DeleteDevice show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)} />
            <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
        </Container>
    );
};

export default Admin;