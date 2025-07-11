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
      src="/audio2.mp3" 
      loop
      preload="auto"
    />
  );
};

export default BackgroundMusic;
