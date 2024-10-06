import { useState } from "react";
import { View1 } from "./View1";
import { View2 } from "./View2";

export function InnerPage() {
  const [view, setView] = useState("view_1");

  const switchView = (viewIndex: number) => {
    setView(`view_${viewIndex}`);
    console.log("setting view to " + viewIndex);
  };

  return (
    <div>
      <h1>Test Component to Capture Events</h1>
      <button
        style={{ margin: "0.2em" }}
        onClick={() => {
          switchView(1);
        }}
      >
        Component_1
      </button>
      <button
        style={{ margin: "0.2em" }}
        onClick={() => {
          switchView(2);
        }}
      >
        Component_2
      </button>
      <div
        style={{
          width: "600px",
          height: "600px",
          padding: "1em",
        }}
      >
        {view === "view_1" ? <View1 /> : <View2 />}
      </div>
    </div>
  );
}
