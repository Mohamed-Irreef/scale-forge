import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const tryAutoPlay = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Music autoplayed!");
            })
            .catch((error) => {
              console.log("Autoplay blocked. Waiting for user interaction...");

              // Wait for user click if autoplay is blocked
              const handleUserInteraction = () => {
                audioRef.current.play();
                window.removeEventListener("click", handleUserInteraction);
              };

              window.addEventListener("click", handleUserInteraction);
            });
        }
      }
    };

    tryAutoPlay();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio3.mp3" // Put your mp3 file in the public folder
      loop
      preload="auto"
    />
  );
};

export default BackgroundMusic;
