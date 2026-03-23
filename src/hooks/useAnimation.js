import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [danceMoveIndex, setDanceMoveIndex] = useState(0);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  const nextMove = useCallback(() => {
    setDanceMoveIndex(prev => (prev + 1) % 4);
  }, []);

  return { isPlaying, speed, danceMoveIndex, togglePlay, changeSpeed, nextMove };
}
