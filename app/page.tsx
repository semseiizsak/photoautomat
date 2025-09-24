"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  "https://static.wixstatic.com/media/65e3c0_30a9fc7d9e1b4f6287cee1070bb925ee~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_d613a719d9a742ed9279915f4c31073a~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_9305be6cd92f41ca8e250572b7414d15~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_4929b72b2c4c49b38ce3e295f8689526~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_c3734f2abf56410aa0f5923a244d45e4~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_ee0da27cf69a46a39afb4b107631792c~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_41bf06b9ea5346cfb454bdc2e00dd7e7~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_51e6f3e213744228b9f3bdc95fafb69b~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_7dcb05b9ee6f49b2a00dde030b033724~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_f81896dcbdfc4be0860e5f9bb03011fe~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_a3eb2c1b794a44948bc598cfabe2904b~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_3cf1a739a87f446daded940ddb792243~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_81c4e717a871415191d3ed3e9066c2a3~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_1cb003ef58c4460997e89823cd8f2931~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_c88cbc10a5e74539a533508fac90e7d6~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_23e5f0666251463bb09cef88a931a3b3~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_4c233153872a4f25abdfdae5e36d5b16~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_2a4b18af9319406db4e351bcbabc44df~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_1e02837186f540b3abd1ae6f422c6619~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_afa12f3eef28421badf4c4bc25ea0af1~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_d4e7855dfe7d457b9c5df7eba2eacb2f~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_0bbb26bc07a34550bdfc67038cd6571b~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_0cea0e9701464c81b68d4223fe41ec4c~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_b5031aecd90d4b37b3ae40979749d956~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_c2fd7c5100334c8d83bfe6e50065eb89~mv2.jpg",
  "https://static.wixstatic.com/media/65e3c0_4929b72b2c4c49b38ce3e295f8689526~mv2.jpg",
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const preloaded = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        preloaded.current[i] = img;
        loadedCount++;
        if (loadedCount === images.length) {
          setAllLoaded(true);
          setFirstImageLoaded(true);
        }
      };
    });
  }, []);

  const handleClick = () => setCurrentIndex((ci) => (ci + 1) % images.length);

  return (
    <>
      {/* fixed full-viewport shell — keeps everything perfectly centered and prevents page scroll from moving the image */}
      <main
        className="fixed inset-0 flex items-center justify-center bg-white text-center p-3 box-border"
        style={{ fontFamily: "Benzin, sans-serif", WebkitFontSmoothing: "antialiased" }}
      >
        {/* Title: clamp() keeps it small on phones, big on desktop. letterSpacing also clamped. */}
        <div className="w-full flex flex-col items-center">
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(25px, 7vw, 42px)", // scales smoothly
              fontWeight: 800,
              lineHeight: 1.02,
              maxWidth: "100vw",
              letterSpacing: "clamp(0.2px, 1vw, 2.5px)",
              margin: 0,
              wordBreak: "break-word",
            }}
          >
            PHOTOAUTOMAT
          </h1>

          {/* Outer padding container: gives exact 10px inner padding on small screens, removed on sm+ */}
          <div className="w-full max-w-[400px] p-[10px] m-6 sm:p-0">
            <div
              className="relative w-full aspect-square overflow-hidden mx-auto cursor-pointer"
              onClick={handleClick}
              // keep the inside from ever exceeding viewport height
              style={{ maxHeight: "calc(100vh - 120px)" }}
            >
              {/* Loader centered */}
              {!firstImageLoaded && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "9999px",
                      border: "4px solid rgba(0,0,0,0.1)",
                      borderTop: "4px solid black",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                </div>
              )}

              {/* Images: only render after fully preloaded to avoid jumps */}
              {allLoaded &&
                images.map((src, i) => {
                  const isCurrent = i === currentIndex;
                  return (
                    <Image
                      key={i}
                      src={src}
                      alt={`Photoautomat ${i + 1}`}
                      fill
                      priority={i === 0}
                      style={{
                        objectFit: "cover",
                        opacity: isCurrent ? 1 : 0,
                        transition: "opacity 300ms ease-in-out",
                      }}
                    />
                  );
                })}
            </div>
          </div>

          <p className="mt-3 text-sm uppercase font-normal tracking-wide underline">
            <a
              href="https://g.page/r/CT1AW9Jeu5g6EAE/review"
              className="text-black"
              style={{ textDecoration: "underline" }}
            >
              BUDAPEST, KAZINCZY U. 7, 1075
            </a>
          </p>
        </div>

        <style>{`
          @keyframes spin {0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
        `}</style>
      </main>
    </>
  );
}