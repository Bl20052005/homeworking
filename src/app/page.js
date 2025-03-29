"use client";
import Image from "next/image";
import {useState, useEffect} from "react";
import { Button } from "@mantine/core";
    
import "./tabs.js"

// import Latex from "react-latex-next";
// import { InlineMath, BlockMath } from "react-katex";
import LatexRender from "./latexRender";

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("This is a placeholder for the message being sent from backend.");

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/home").then(
      response=>response.json()
    ).then((data)=>{
      setMessage(data.message);
    });
  });
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
      <div>
        <div>{message}</div>
      </div>
    </main>
  );
}
