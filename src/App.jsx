import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Header />
      <input type="text" onChange={handleName} />
      <Hero name={name} />
      <div>
        <h1 className="text-3xl">hello world</h1>
      </div>
    </>
  );
}

export default App;
