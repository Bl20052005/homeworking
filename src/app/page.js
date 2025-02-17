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
    <>
      
      </>
  );
}
