import Image from "next/image";
import { Button } from "@mantine/core";

export default function Home() {
  return (
    <main>
      <Button variant="filled" className="relative">
        <div>hello!</div>
        <input type="file" className="absolute h-full w-full top-0 left-0 z-10 opacity-0"></input>
      </Button>
    </main>
  );
}
