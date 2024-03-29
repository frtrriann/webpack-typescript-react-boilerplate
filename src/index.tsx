import { createRoot } from 'react-dom/client';
import "./styles/index.css";
import { Button } from "./components/Button";
import webpackLogo from "./images/webpack-logo.svg";
import typescriptLogo from "./images/typescript-logo.svg";
import reactLogo from "./images/react-logo.svg";

const logoStyle = {
  width: 300,
  margin: 40,
};

const App = (
  <div style={{ padding: 20, textAlign: "center" }}>
    <img style={logoStyle} src={webpackLogo}></img>
    <img style={logoStyle} src={typescriptLogo}></img>
    <img style={logoStyle} src={reactLogo}></img>
    <div>
      <form
        onSubmit={() => {
          window.open("https://github.com/frtrriann");
        }}
      >
        <Button size="medium" type="submit">
        Webpack + Typescript + React boilerplate
        </Button>
      </form>
    </div>
  </div>
);

createRoot(document.getElementById("root") as Element).render(App);
