import { useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.volume = 0.15;

        await audioRef.current.play();

        setPlaying(true);
        setError(false);
      }
    } catch {
      setError(true);
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/ambient.mp3"
        loop
        preload="none"
        onError={() => setError(true)}
      />

      <button
        onClick={toggleAudio}
        title={error ? "Missing public/ambient.mp3" : "Toggle ambient sound"}
        className={`fixed bottom-24 left-6 z-50 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs backdrop-blur-xl transition hover:border-[var(--accent)] md:block ${
          error
            ? "text-red-300"
            : "text-slate-300 hover:text-[var(--accent)]"
        }`}
      >
        {error ? "Audio Missing" : playing ? "Ambient On" : "Ambient Off"}
      </button>
    </>
  );
}