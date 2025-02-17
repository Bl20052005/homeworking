"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <>
      <h1 className="title">HOMEWORKING</h1>
      <div>
        <div className="tabs">
          <div className="tabs-header">
            <button
              className={`button ${
                activeTab == 0 ? "button-active" : "button-inactive"
              }`}
              onClick={() => {
                router.push("/");
                setActiveTab(0);
              }}
            >
              Home
            </button>
            <button
              className={`button ${
                activeTab == 1 ? "button-active" : "button-inactive"
              }`}
              onClick={() => {
                router.push("/login");
                setActiveTab(1);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
