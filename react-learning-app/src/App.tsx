import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectitem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
     
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectitem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
