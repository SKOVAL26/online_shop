import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
console.log(user)
    return (

            <Routes>
                {user.isAuth && authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

                {/* Если URL не соответствует ни одному из маршрутов, перенаправляем на SHOP_ROUTE */}
                <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
            </Routes>

    );
};

export default AppRouter;