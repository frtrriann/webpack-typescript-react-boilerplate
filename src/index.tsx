import { render } from "preact";
import "styles/index.css";
import { Button } from "components/Button";
import { Input } from "components/Input";

const App = (
  <div style={{ padding: 20 }}>
    <Button size="small">Button</Button>
    <Button size="medium">Button</Button>
    <Button size="large">Button</Button>
    <Input />
  </div>
);

render(App, document.getElementById("root") as Element);
