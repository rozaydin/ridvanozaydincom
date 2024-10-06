import { useEffect } from "react";

export const View1 = () => {
  useEffect(() => {
    console.log("rendering view 1 to screen ...");

    window.FS("setProperties", {
      type: "page",
      properties: {
        pageName: "/test",
        component: "view1",
      },
    });

    
  }, []);

  return (
    <div
      style={{
        backgroundColor: "cyan",
        margin: "1em",
        padding: "1em",
        width: "100%",
        height: "100%",
        borderRadius: "4px",
      }}
    >
      <h1> View 1 </h1>
      <p> You are vieweing view 1 now</p>
    </div>
  );
};
