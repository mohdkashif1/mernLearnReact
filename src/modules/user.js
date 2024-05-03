import { useState } from "react";

export default function User() {

  const [name,setName]=useState()
  const submit=async()=>{
    try {
      const response = await fetch("http://localhost:5000/create/user", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
      });
      const result = await response.json();
      alert("Success:", result);
    } catch (error) {
      alert("Error:", error);
    }
  }
  
  
  return (
   <>
                          <input onChange={(e)=>setName(e.target.value)} name='name' value={name} type="text" placeholder="Message:" />
                            <button
                              type="button"
                              
                              onClick={submit}
                            >
                              Submit
                            </button>
   </>
  );
}
