import { render } from "preact";
import "index.css";
import { Button } from "components/Button";
import { Input } from "components/Input";
import image from "images/Image.jpg";

const App = (
  <div>
    <Button>Button</Button>
    <Input />
    <img src={image} />
    <img src="assets/Image.jpg" />
  </div>
);

render(App, document.getElementById("root") as Element);
