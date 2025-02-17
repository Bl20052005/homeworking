"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mantine/core";

// import { EmbedPDF } from "@simplepdf/react-embed-pdf";
    
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
      
      {/* <Button variant="filled" className="relative">
        <div>Insert your file here!</div>
        <input
          type="file"
          className="absolute h-full w-full top-0 left-0 z-10 opacity-0"
          onChange={handleFileChange}
        ></input>
      </Button> */}

      {/* {file && file.type === "application/pdf" && (
        <div style={{ marginTop: 20 }}>
          <h3>PDF: </h3>
          <EmbedPDF file={file} />
        </div>
      )} */}

      <LatexRender text="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
    </main>
  );
}
