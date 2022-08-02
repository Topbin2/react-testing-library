import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  type TComponent = (setOrderPhase?: any) => JSX.Element;
  let Component: TComponent = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderSummary;
      break;
    case "completed":
      Component = OrderConfirmation;
      break;
    default:
  }

  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
