import './styles/global.css';
import './styles/app.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, danceMoveIndex, togglePlay, changeSpeed, nextMove } = useAnimation();

  return (
    <main className="app">
      <div className="card">
        <header className="app-header">
          <h1 className="title">🐱 댄싱 냥이</h1>
          <p className="subtitle">클릭해서 냥이와 함께 춤을!</p>
        </header>

        <div
          className="cat-stage"
          onClick={togglePlay}
          role="button"
          tabIndex={0}
          aria-label="고양이 클릭으로 애니메이션 토글"
          onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && togglePlay()}
        >
          <DancingCat isPlaying={isPlaying} speed={speed} danceMoveIndex={danceMoveIndex} />
          {!isPlaying && (
            <div className="paused-overlay">
              <span className="paused-text">클릭하여 시작 ▶</span>
            </div>
          )}
        </div>

        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          danceMoveIndex={danceMoveIndex}
          onToggle={togglePlay}
          onSpeedChange={changeSpeed}
          onNextMove={nextMove}
        />
      </div>
    </main>
  );
}
