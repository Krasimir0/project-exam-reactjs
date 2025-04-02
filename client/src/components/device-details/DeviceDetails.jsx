import { Link, useNavigate, useParams } from "react-router";
import { useDeleteDevice, useDevice } from "../../api/deviceApi";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function DeviceDetails() {
    const navigate = useNavigate(); 
    const { userId } = useAuth()
    const { deviceId } = useParams();
    const { device } = useDevice(deviceId);
    const { deleteDevice } = useDeleteDevice();
    

    const deviceDeleteHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${device.deviceName} device?`);

        if (!hasConfirm) {
            return;
        }

        try {
            await deleteDevice(deviceId);
            
            toast.success("Successfully deleted device")
            navigate('/devices')    
        } catch (err) {
            toast.error(err.message)
        }
        
    }

    const isOwner = userId === device._ownerId;

    return (
        <>
           <div className="device-details-section">
                <div className="container">
                    <div className="device-details-card">
                        <img src={device.imageUrl} alt={device.deviceType} className="device-details-image" />
                        <div className="device-details-content">
                            <h1 className="device-details-title">{device.deviceName}</h1>
                            <p className="device-details-description">{device.description}</p>
                            <p className="device-details-price">Price: <span>${device.price}</span></p>
                            <div className="button-container">
                            <button className="device-back-button" onClick={() => window.history.back()}>Back</button>
                            {isOwner && (
                                <>
                                <Link className="device-edit-button" to={`/details/${deviceId}/edit`} >Edit</Link>
                                <button className="device-delete-button" onClick={deviceDeleteHandler}>Delete</button>
                                </>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}