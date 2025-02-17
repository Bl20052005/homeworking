"use client";

// import Image from "next/image";
import {useState} from "react";
import { Button } from "@mantine/core";
import "./tabs.js"
import { useRouter } from 'next/navigation'
// import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function Home() {
  const [file, setFile] = useState(null);

  const router = useRouter()

  const handleFileChange = (event)=>{
    const selectedFile = event.target.files[0];
    if(selectedFile && selectedFile.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile(fileUrl);
    }
  };

  return (
    <>
      
      </>
  );
}
