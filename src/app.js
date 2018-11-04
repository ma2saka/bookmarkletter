import React from "react";
import { render } from "react-dom";
import { mainWrapper, main, header } from "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className={mainWrapper}>
        <div className={main}>
          <div className={header}>
            <a href="#" onClick={() => { this.props.onRemove(); return false; }}>閉じる</a>
          </div>
          hello bookmark
        </div>
      </div>
    );
  }
}

export default function app(element, remover) {
  render(<App onRemove={remover} />, element);
}