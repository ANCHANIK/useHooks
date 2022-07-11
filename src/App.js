import "./styles.css";
import UseInput from "./Hooks/UseInput";

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const name = UseInput("ANCHANIK", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}