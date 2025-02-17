"use client";

import katex from "katex";
import { useEffect, useRef } from "react";

function LatexRender({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      katex.render(text, ref.current);
    }
  }, [text]);

  return <div className="latex-render" ref={ref}></div>;
}

export default LatexRender;
