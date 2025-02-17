export default function DottedBackground() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-black [background-size:15px_15px] [background-image:radial-gradient(rgba(0,80,150,0.7)_1.2px,transparent_1.2px)]" />
      
      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue/50 to-transparent" />
    </div>
  );
}


