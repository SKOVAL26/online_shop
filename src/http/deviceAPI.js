import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}
export const deleteType = async (typeId) => {
    try {
        // Отправьте DELETE-запрос на сервер для удаления типа
        const response = await $authHost.delete(`api/type/${typeId}`); // Изменено на `api/type/${typeId}`

        if (response.status === 200) {
            console.log(`Тип с ID ${typeId} успешно удален`);
            return true; // Вернуть true в случае успешного удаления
        } else {
            console.error(`Ошибка при удалении типа с ID ${typeId}`);
            return false; // Вернуть false в случае ошибки
        }
    } catch (error) {
        console.error('Сетевая ошибка:', error);
        return false; // Вернуть false в случае сетевой ошибки
    }
};