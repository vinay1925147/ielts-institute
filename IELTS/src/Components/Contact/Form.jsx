import { useState } from "react";
import "./Form.css";
function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1fe69be6-1d4e-43b2-97fa-8649a8cb6491");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form-container">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          placeholder="Enter name"
          id="name"
          name="name"
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="enter your email"
          id="email"
          name="email"
          required
        />
        
        <label htmlFor="response"> Your response</label>
        <textarea
          name="response"
          id="response"
          placeholder="your response"
          style={{height:"100px"}}
        ></textarea>
        <button style={{textAlign:"center"}} className="btn dark-btn">Submit now</button>
      </form>
      <div className="submit-form">
        <span>{result}</span>
      </div>
      
    </>
  );
}

export default Form;
