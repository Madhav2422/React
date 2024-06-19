import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx"
function App() {
  let myObj={
    username:"Madhqv",
    age:21
  }
  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind </h1>
      <Card username ="madhav"  btnText="click me " />
      <Card username="sinu"  />
    </>
  );
}

export default App;
