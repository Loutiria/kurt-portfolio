import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRecruiterMode } from "../context/RecruiterModeContext";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const { recruiterMode } = useRecruiterMode();

  useEffect(() => {
    if (recruiterMode && audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [recruiterMode]);

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
        type="button"
        onClick={toggleAudio}
        title={error ? "Missing public/ambient.mp3" : "Toggle ambient sound"}
        className={`fixed bottom-36 left-4 z-[999] flex items-center justify-center rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent)] active:scale-95 md:bottom-24 md:left-6 ${
          playing ? "text-[var(--accent)]" : "text-slate-300"
        } ${error ? "border-red-400/30 text-red-300" : ""}`}
      >
        <div className="grid h-11 w-11 place-items-center md:hidden">
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </div>

        <div className="hidden items-center gap-3 px-4 py-3 md:flex">
          {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}

          <span className="text-xs font-medium">
            {error ? "Audio Missing" : playing ? "Ambient On" : "Ambient Off"}
          </span>
        </div>
      </button>
    </>
  );
}