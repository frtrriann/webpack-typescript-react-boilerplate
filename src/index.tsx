import { render } from "preact";
import "styles/index.css";
import { Button } from "components/Button";

const App = (
  <div style={{ padding: 20 }}>
    <Button>Button</Button>
  </div>
);

render(App, document.getElementById("root") as Element);
