import {useState} from "react"
import './App.css'






function App() {

 const [textColor,setTextColor] = useState<string>("")
 const [bgColor,setBgColor] = useState<string>("")

 const [weight,setWeigth] = useState<number>(0)
 const [result,setResult] = useState<number>(0)
  
const selectTheme =(event: React.ChangeEvent<HTMLSelectElement>) =>{
         const value = event.target.value
         value == "dark"? setTextColor("orange"):setTextColor("");
         value == "dark"? setBgColor("gray"):setBgColor("");
  }
const inputNumber =(event: React.ChangeEvent<HTMLInputElement>)=>{
         const num = event.target.value
         setWeigth(+num)
         setResult(0)
        
}
const submit =(event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const result = (weight *2.2)*(30/2)
      setResult(result)
   
}
  return (
    <>  
        
      <div className="container" style={{backgroundColor:bgColor}}>
        <h1 style={{color:textColor}}> ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h3> {result.toFixed(2)} มล.  </h3>
        <form onSubmit={submit}>
          <input type="number" placeholder="น้ำหนักของคุณ(กิโลกรัม)" required onChange={inputNumber} /> 
          <button type='submit'> คำนวน</button>
        </form>
        <select name='select-theme' id='theme' onChange={selectTheme} >
          <option value="light"> 🔆 light </option>
          <option value="dark">  🌙 dark</option>
        </select>

      </div>
    </>
  );
}

export default App;
