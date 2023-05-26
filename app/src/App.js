import "./styles/index.css";
import Weather from "./components/Weather";


export default function App() {
  return (
    <div className="App">

        <Weather defaultCity="Kyiv" />

    </div>
  );
}
