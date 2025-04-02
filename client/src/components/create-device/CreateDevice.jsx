import { useNavigate } from 'react-router' 
import { useCreateGame } from '../../api/deviceApi';
import { toast } from 'react-toastify';

export default function CreateDevice() {
      const navigate = useNavigate();
      const { create } = useCreateGame();

      const submitAction = async (formData) => {
          const deviceData = Object.fromEntries(formData);
          try {
            await create(deviceData);

            toast.success("Successfully created device")
            navigate('/devices')   
          } catch (err) {
            toast.error(err.message)
          }
      }
    
      return (
        <div className="create-device-form">
          <h2>Create New Device</h2>
          <form action={submitAction}>
            <input
              type="text"
              name="deviceName"
              placeholder="Device Name"
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
              required
            ></textarea>
            <textarea
              name="price"
              placeholder="Price $"
              rows="1"
              required
            ></textarea>
             <textarea
              name="imageUrl"
              placeholder="Image"
              rows="1"
              required
            ></textarea>
            <button type="submit">Create Device</button>
          </form>
        </div>
      );
    };    
