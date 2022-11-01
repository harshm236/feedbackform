import React from "react";
import ReactDOM from "react-dom/client";


const arr = []
export function App() {
  function Submission(Event) {
    Event.preventDefault()
     const z = {}
     z.name=document.getElementById("name").value;
     z.dept=document.getElementById("dept").value;
     z.rate=document.getElementById("rate").value;

     arr.push(z)
     console.log(arr)


    const x = ReactDOM.createRoot(document.getElementById("root2"));
    x.render(
      <>

        <div >
          <div id="card">{arr.map(a=><div>name-{a.name}<br/> department-{a.dept}<br/> rating-{a.rate}<hr/></div>)}</div>
       
         </div> 
      </>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        fontSize: "30px",
        alignItems: "center",
      }}
    >  <form action="">
      <h1 style={{ textAlign: "center" }}>EMPLOYEE FEEDBACK FORM</h1>
      <span>NAME-</span> 
      <input name="name" id="name"  type={"text"} />
      <hr />
      <span>DEPARTMENT-</span>
      <input name="dept" id="dept"  type={"text"} />
      <hr />
      <span>RATING-</span>
      <input name="rate" id="rate"  type={"number"} />
      <hr />
      <input onClick={Submission} type={"submit"}></input>
      </form>
    </div>
  );
}
