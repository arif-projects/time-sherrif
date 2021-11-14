import React from "react";
import "./AddNew.css";
import UserDashboard from "../UserDashboard/UserDashboard";
const AddNew = () => {
  const [info, setInfo] = React.useState({});
  const [file, setFile] = React.useState(null);
  const handleBlur = e => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
  }
 console.log(info);
  const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }

  const handleSubmit = () => {
      const formData = new FormData()
      formData.append('file', file);
      formData.append('name', info.name);
      formData.append('price', info.price);
      formData.append('description', info.description);
      console.log(formData);

      fetch('https://stormy-lowlands-53575.herokuapp.com/addProduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(error => {
              console.error(error)
          })
  }

  return (  
    <>
      <UserDashboard />
      <div className=" p-4 pr-5 mt-5 mb-5 w-75 mx-auto">
      
        <h5 className="text-brand mt-4 text-center writeInput">Add New</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeInput">
              Product Name
            </label>
            <input
            onBlur={handleBlur}
              type="text"
              className="form-control writeInput mt-2 mb-3"
              name="name"
              placeholder="Product Name"
               
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeInput">
              Price
            </label>
            <input
            onBlur={handleBlur}
              type="text"
              className="form-control writeInput mt-2 mb-3"
              name="price"
              placeholder="Enter a Price"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeInput">
              Description
            </label>
            <textarea
           onBlur={handleBlur}
              type="text"
              className="form-control writeInput mt-2 mb-3"
              cols="30"
              rows="5"
              name="description"
              placeholder="description"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeInput">
              Upload a image
            </label>
            <input
               onChange={handleFileChange}
              type="file"
              className="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="submit mt-3">Submit</button>
           
        </form>
      </div>

    </>
  );
};

export default AddNew;
