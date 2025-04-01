import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = "http://localhost:3030/data/devices";

export const useCreateGame = () => {
    const { request } = useAuth();

    const create = (deviceData) => {
        request.post(baseUrl, deviceData);
    }
    
    return {
        create
    }
}

export const useDevices = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
        .then(setDevices)
    }, []);

    return {
        devices
    }
}

export const useDevice = (deviceId) => {
    const [device, setDevice] = useState({})
    
    useEffect(() => {
        request.get(`${baseUrl}/${deviceId}`)
        .then(setDevice);
    }, [deviceId])

    return {
        device
    }
}


export const useEditDevice = () => {
    const { request } = useAuth();

    const edit = (deviceId, deviceData) => {
        request.put(`${baseUrl}/${deviceId}`, {...deviceData, _id: deviceId});
    } 

    return {
        edit
    }
}

export const useDeleteDevice = () => {
    const { request } = useAuth()

    const deleteDevice = (deviceId) => {
        request.delete(`${baseUrl}/${deviceId}`)
    }

    return {
        deleteDevice
    }
}

export const useLatestDevices = () => {
    const [latestDevices, setLatestDevices] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 2,
            select: '_id,imageUrl,price,deviceType,description'
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
        .then(setLatestDevices)
    }, [])

    return {
        latestDevices
    }
}