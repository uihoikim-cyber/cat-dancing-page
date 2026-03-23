import '../styles/controls.css';

const speedOptions = [
  { label: '느리게', value: 0.5 },
  { label: '보통', value: 1 },
  { label: '빠르게', value: 2 },
  { label: '미침!', value: 3 },
];

const danceNames = ['바운스', '스핀', '위글', '그루브'];

export default function AnimationControls({ isPlaying, speed, danceMoveIndex, onToggle, onSpeedChange, onNextMove }) {
  return (
    <div className="controls-container" role="region" aria-label="애니메이션 제어">
      <div className="controls-row">
        <button
          className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
          onClick={onToggle}
          aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        >
          {isPlaying ? '⏸ 정지' : '▶ 시작'}
        </button>

        <button
          className="move-btn"
          onClick={onNextMove}
          aria-label="다음 댄스 동작"
        >
          💃 {danceNames[danceMoveIndex]}
        </button>
      </div>

      <div className="speed-controls" role="group" aria-label="속도 조절">
        <span className="speed-label">속도</span>
        <div className="speed-buttons">
          {speedOptions.map(opt => (
            <button
              key={opt.value}
              className={`speed-btn ${speed === opt.value ? 'active' : ''}`}
              onClick={() => onSpeedChange(opt.value)}
              aria-pressed={speed === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
