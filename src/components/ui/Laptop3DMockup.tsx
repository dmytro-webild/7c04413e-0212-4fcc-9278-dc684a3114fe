import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type Laptop3DMockupProps = {
  imageSrc?: string;
  videoSrc?: string;
  className?: string;
};

export default function Laptop3DMockup({
  imageSrc,
  videoSrc,
  className = "",
}: Laptop3DMockupProps): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, 4]), springConfig);
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, -4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={`relative w-full max-w-xl xl:max-w-2xl mx-auto flex flex-col items-center justify-center py-4 sm:py-6 select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Main 3D Floating Laptop Assembly */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center"
        animate={
          isHovered
            ? {}
            : {
                y: [-6, 6, -6],
                rotateX: [10, 13, 10],
                rotateY: [-14, -8, -14],
                rotateZ: [1.5, -1, 1.5],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateXSpring : undefined,
          rotateY: isHovered ? rotateYSpring : undefined,
        }}
      >
        {/* === LAPTOP DISPLAY LID === */}
        <div
          className="relative w-[280px] xs:w-[340px] sm:w-[440px] md:w-[500px] lg:w-[480px] xl:w-[540px] aspect-[16/10] bg-gradient-to-tr from-slate-900 via-slate-800 to-gray-900 rounded-[18px] sm:rounded-[22px] p-2.5 sm:p-3.5 border border-white/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.2)] overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "bottom center",
          }}
        >
          {/* Top Bezel Webcam Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700/80 z-30" />

          {/* Screen Inner Display Frame */}
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/10 shadow-inner">
            <ImageOrVideo
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              className="w-full h-full object-cover object-top rounded-lg"
            />

            {/* Glossy Glass Reflection Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none z-20 opacity-70"
              aria-hidden="true"
            />

            {/* Screen Edge Bevel Highlight */}
            <div
              className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none z-20"
              aria-hidden="true"
            />
          </div>

          {/* Screen Side Thickness (3D Edge Shadow) */}
          <div
            className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50 rounded-b-sm"
            aria-hidden="true"
          />
        </div>

        {/* === LAPTOP HINGE === */}
        <div
          className="w-[110px] sm:w-[150px] h-2.5 sm:h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-md shadow-md -mt-0.5 z-20 border-t border-slate-500/30"
          aria-hidden="true"
        />

        {/* === LAPTOP BASE DECK === */}
        <div
          className="relative w-[310px] xs:w-[370px] sm:w-[480px] md:w-[540px] lg:w-[520px] xl:w-[580px] h-[115px] sm:h-[155px] md:h-[180px] lg:h-[170px] xl:h-[190px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 rounded-b-[24px] sm:rounded-b-[30px] p-2.5 sm:p-4 border-t border-white/20 border-b border-slate-950 shadow-2xl -mt-1"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(62deg) translateZ(-12px) translateY(-38px)",
            transformOrigin: "top center",
          }}
        >
          {/* Top Notch / Opening Lip */}
          <div className="w-14 sm:w-20 h-1 sm:h-1.5 bg-slate-950 rounded-full mx-auto mb-2 border-b border-white/10" />

          {/* Keyboard Key Deck Representation */}
          <div className="w-[90%] mx-auto bg-slate-950/90 rounded-lg p-1.5 sm:p-2.5 border border-white/10 shadow-inner flex flex-col gap-1 sm:gap-1.5">
            {/* Function Keys Row */}
            <div className="w-full h-1.5 sm:h-2 bg-slate-900/80 rounded flex gap-0.5 px-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 bg-slate-800/60 rounded-sm" />
              ))}
            </div>
            {/* Key Rows */}
            {Array.from({ length: 4 }).map((_, row) => (
              <div key={row} className="w-full h-2.5 sm:h-3.5 bg-slate-900/90 rounded flex gap-1 px-0.5 items-center">
                <div className="w-4 bg-slate-800/80 h-full rounded-sm" />
                <div className="flex-1 bg-slate-800/50 h-full rounded-sm" />
                <div className="w-6 bg-slate-800/80 h-full rounded-sm" />
              </div>
            ))}
          </div>

          {/* Trackpad */}
          <div className="w-24 sm:w-36 h-10 sm:h-14 border border-white/15 rounded-md mx-auto mt-2 sm:mt-3 bg-slate-900/50 shadow-inner" />

          {/* Front Bevel Metallic Highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-b-[24px] opacity-80" />
        </div>

        {/* === 3D FLOATING MOBILE PHONE MOCKUP (SECOND DEVICE) === */}
        <motion.div
          className="absolute right-0 sm:-right-2 md:-right-4 lg:-right-2 xl:-right-4 bottom-2 sm:bottom-4 md:bottom-6 z-30 w-[75px] sm:w-[115px] md:w-[135px] lg:w-[125px] xl:w-[140px] aspect-[9/19.5] bg-slate-900 rounded-[18px] sm:rounded-[26px] p-1.5 sm:p-2 border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-25deg) rotateX(12deg) rotateZ(-6deg) translateZ(35px)",
          }}
          animate={
            isHovered
              ? {}
              : {
                  y: [4, -6, 4],
                  rotateZ: [-6, -3, -6],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {/* Phone Dynamic Island / Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-2 sm:h-3 bg-black rounded-full z-30 border border-slate-800" />

          {/* Phone Screen Display */}
          <div className="relative w-full h-full bg-black rounded-[12px] sm:rounded-[20px] overflow-hidden border border-white/10">
            <ImageOrVideo
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              className="w-full h-full object-cover object-center rounded-[12px] sm:rounded-[20px]"
            />
            {/* Phone Glass Glare Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none z-20"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* === 3D FLOOR DROP SHADOW === */}
      <motion.div
        className="w-[75%] max-w-[480px] h-7 bg-black/70 blur-xl rounded-[100%] mx-auto -mt-6 z-0"
        animate={
          isHovered
            ? {}
            : {
                scale: [0.85, 1, 0.85],
                opacity: [0.5, 0.75, 0.5],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
