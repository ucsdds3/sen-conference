"use client";

import { useEffect, useState } from "react";

export function useFlipCardHover(flipped: boolean, active = true) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!flipped) setHovered(false);
  }, [flipped]);

  const transform = flipped
    ? "rotateY(-180deg)"
    : hovered && active
    ? "rotateY(-15deg)"
    : "rotateY(0deg)";

  const mouseHandlers = {
    onMouseEnter: () => { if (!flipped && active) setHovered(true); },
    onMouseLeave: () => setHovered(false),
  };

  return { transform, mouseHandlers };
}
