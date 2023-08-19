import "./App.css"







const User = ({name, age , email}) => {
  return(
  <div>
    <h1>{name}</h1>
    <h1> {age}</h1>
    <h1>{email}</h1>

  </div>
  )
}

const Salary = ({position, Salary}) => {

  return(
    <div className="Salary"  >

      <h1>Position: {position}</h1>
      <h1> {Salary}</h1>


    </div>

  )

}



function App() { 
  const age = 19;
  const isGreen = true;
  

  return (
    
    <div className="App">
     
     {age >= 18 ? <h1>over age</h1> : <h1> under age </h1>}
     <h1 style={{color: isGreen ? "green" : "red"}}>This has color </h1>

      {/* <Salary position="SDE1" Salary={12000}></Salary>
      <Salary position="SDE2" Salary={15000}></Salary>
      <User name =" rahul"></User>
     <User name="rahul" age={21} email="rahul@rahul.com" ></User>
     <User name="rahul" age={21} email="rahul@rahul.com" ></User>
     <User name="rahul" age={21} email="rahul@rahul.com" ></User> */}
    </div>
  );
}

export default App;
