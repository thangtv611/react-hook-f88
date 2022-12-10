import { useEffect, useState } from "react";

function Content() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("hook was called");
  });

  console.log("render");

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default Content;
