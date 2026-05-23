import { Volume2, VolumeX } from "lucide-react";
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
        className={`fixed bottom-4 right-4 z-50 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/30 text-xs backdrop-blur-xl transition hover:border-[var(--accent)] active:scale-95 md:bottom-24 md:left-6 md:right-auto md:h-auto md:w-auto md:px-4 md:py-3 ${
          error
            ? "text-red-300"
            : "text-slate-300 hover:text-[var(--accent)]"
        }`}
      >
        <span className="hidden md:block">
          {error ? "Audio Missing" : playing ? "Ambient On" : "Ambient Off"}
        </span>

        <span className="md:hidden">
          {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </span>
      </button>
    </>
  );
}