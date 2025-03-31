export default function CreateDevice() {
   
    
      return (
        <div className="create-device-form">
          <h2>Create New Device</h2>
          <form>
            <input
              type="text"
              name="deviceName"
              placeholder="Device Name"
            //   value={}
            //   onChange={handleChange}
            //   required
            />
            <select name="deviceType">
              <option value="">Select Device Type</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
            </select>
            <textarea
              name="description"
              placeholder="Device Description"
              rows="4"
            //   value={formData.description}
            //   onChange={handleChange}
            //   required
            ></textarea>
            <textarea
              name="price"
              placeholder="Price $"
              rows="1"
            //   value={formData.description}
            //   onChange={handleChange}
            //   required
            ></textarea>
             <textarea
              name="imageUrl"
              placeholder="Image"
              rows="1"
            //   value={formData.description}
            //   onChange={handleChange}
            //   required
            ></textarea>
            <button type="submit">Create Device</button>
          </form>
        </div>
      );
    };    
