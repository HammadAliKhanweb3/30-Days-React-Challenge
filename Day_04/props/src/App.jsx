import "./App.css";
import Card from "./Card";

function App() {
  let defaultCountry = {
    name: "China",
    about: "China is an Asian Contry.",
  };

  let country = {
    name: "Finland",
    about: "Finland is a Beautifull Scandnavian Contry.",
  };

  return (
    <>
      <Card someObject={defaultCountry} btnText="check" />
      <Card someObject={country} btnText="view" />
    </>
  );
}

export default App;
