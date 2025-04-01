import { useNavigate, useParams } from "react-router"
import { useDevice, useEditDevice } from "../../api/deviceApi";

export default function DeviceEdit() {
    const navigate = useNavigate();
    const { deviceId } = useParams();
    const { device } = useDevice(deviceId)
    const { edit } = useEditDevice();

    const submitHandler = async (formData) => {
        const deviceData = Object.fromEntries(formData);

        await edit(deviceId, deviceData);

        navigate(`/details/${deviceId}`)
    }

    return (
        <div className="create-device-form">
          <h2>Edit Device</h2>
          <form action={submitHandler}>
            <input
              type="text"
              name="deviceName"
              placeholder="Device Name"
              defaultValue={device.deviceName}
              required
            />
            <select name="deviceType">
              <option value="">Select Device Type</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
              <option value="tablet">Console</option>
              <option value="tablet">PC</option>
            </select>
            <textarea
              name="description"
              placeholder="Device Description"
              rows="4"
              defaultValue={device.description}
              required
            ></textarea>
            <textarea
              name="price"
              placeholder="Price $"
              rows="1"
              defaultValue={device.price}
              required
            ></textarea>
             <textarea
              name="imageUrl"
              placeholder="Image"
              rows="1"
              defaultValue={device.imageUrl}
              required
            ></textarea>
            <button type="submit">Edit Device</button>
          </form>
        </div>
    )
}