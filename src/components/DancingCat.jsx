import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const danceMoves = ['dance-bounce', 'dance-spin', 'dance-wiggle', 'dance-groove'];

export default function DancingCat({ isPlaying, speed, danceMoveIndex }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${1.2 / speed}s`,
  };

  const moveClass = danceMoves[danceMoveIndex];

  return (
    <div className="dancing-cat-container">
      <div className="music-notes" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♩</span>
        <span className="note note-4">♬</span>
        <span className="note note-5">♪</span>
      </div>
      <div
        className={`cat-wrapper ${moveClass}`}
        style={animationStyle}
      >
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
      </div>
      <div className="stage-shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
    </div>
  );
}
