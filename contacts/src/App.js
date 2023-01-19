import { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);

  const handleSubmit = () => {
    console.log("data");
    let data = { name, phone };
    console.log("data", data);
    axios({
      method: "POST",
      url: `http://localhost:8000/`,
      data: data,
    });
  };
  return (
    <div>
      <div>
        <div>Name:</div>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            console.log(String(e.target.value).trimLeft(), "name");
            setName(String(e.target.value).trimLeft());
          }}
        />
      </div>
      <div>
        <div>Phone:</div>
        <input
          type="number"
          className="phone-number ml-2 tm-h6"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => {
            console.log("phone", e.target.value);
            setPhone(e.target.value);
          }}
          id="phone-number-field"
        />
      </div>
      <button
        onClick={() => {
          console.log("name", name, "phone", phone);
          handleSubmit();
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
