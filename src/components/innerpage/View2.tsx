import { useEffect } from "react";

export const View2 = () => {
  useEffect(() => {
    console.log("rendering view 2 to screen ...");

    window.FS("setProperties", {
      type: "page",
      properties: {
        pageName: "/test",
        component: "view2",
      },
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "orange",
        margin: "1em",
        padding: "1em",
        width: "100%",
        height: "100%",
        borderRadius: "4px",
      }}
    >
      <h1> View 2 </h1>
      <p> You are vieweing view 2 now</p>
    </div>
  );
};
