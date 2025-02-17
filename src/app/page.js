"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mantine/core";
    
import "./tabs.js"

// import Latex from "react-latex-next";
// import { InlineMath, BlockMath } from "react-katex";
import LatexRender from "./latexRender";

export default function Home() {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile(fileUrl);
    }
  };

  return (
    <main>
      <LatexRender text="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
    </main>
  );
}
