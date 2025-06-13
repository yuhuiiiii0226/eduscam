'use client';

import { useEffect, useState, useCallback } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // 檢查是否是可點擊元素
    const isClickable = 
      target.tagName === 'BUTTON' || 
      target.tagName === 'A' || 
      target.tagName === 'INPUT' ||
      target.tagName === 'SELECT' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[role="button"]') ||
      target.closest('.cursor-pointer') ||
      target.getAttribute('role') === 'button';
    
    if (isClickable) {
      setCursorText('Click');
      setIsHovering(true);
    } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      setCursorText('Type');
      setIsHovering(true);
    } else if (target.hasAttribute('draggable') || target.classList.contains('resize')) {
      setCursorText('Drag');
      setIsHovering(true);
    } else if (target.hasAttribute('disabled')) {
      setCursorText('Disabled');
      setIsHovering(true);
    } else {
      setCursorText('');
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const updatePosition = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [handleMouseOver]);

  return (
    <div
      className={`cursor-dot ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
        pointerEvents: 'none',
      }}
    >
      {cursorText && <span className="cursor-text">{cursorText}</span>}
    </div>
  );
} 