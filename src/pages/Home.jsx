import { useState } from "react";

// firebase import
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

const db = getDatabase(app);

const Home = () => {
  const [data, setData] = useState({
    key: "",
    title: "",
    description: "",
  });

  const putData = () => {
    set(ref(db, "data/" + data.key), data);
  };

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const upload = () => {
    console.log(data);
    putData();
  };

  return (
    <>
      <div className="home-container">
        <h1>Upload to cloud</h1>
        <div className="input-box">
          <input
            onChange={handleInput}
            type="text"
            required
            value={data.key}
            name="key"
            placeholder="secret key"
          />
          <br />
          <input
            onChange={handleInput}
            type="text"
            value={data.title}
            required
            name="title"
            placeholder="Title"
          />
          <br />
          <textarea
            value={data.description}
            onChange={handleInput}
            type="text"
            required
            name="description"
            placeholder="Description"
          />
          <br />
          <button onClick={upload} className="upload-btn">
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
