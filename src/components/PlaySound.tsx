import { useEffect, useState } from "react";

interface PlaySoundProps {
  src: string;
}

const PlaySound = (props: PlaySoundProps) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [text, setText] = useState<String>("Play Sound");

  useEffect(() => {
    const newAudio = new Audio(`${window.location.href}/${props.src}`);
    setAudio(newAudio);
  }, [props.src]);

  const clickHandle = () => {
    if (!playing) {
      audio?.play();
      setText("Pause Sound");
    } else {
      audio?.pause();
      setText("Play Sound");
    }

    setPlaying(!playing);
  };

  return (
    <div className="container margin-5">
      <button className="button" onClick={clickHandle}>
        {text}
      </button>
      <div className="mt-5 width-100">
        <button
          className="button"
          onClick={() => {
            audio?.pause();
            setText("Play Sound");
            setPlaying(false);
            const newAudio = new Audio(`${window.location.href}/${props.src}`);
            setAudio(newAudio);
          }}
        >
          Stop Sound
        </button>
      </div>
    </div>
  );
};

export default PlaySound;
