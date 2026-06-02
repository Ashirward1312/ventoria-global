import React, { useEffect, useState } from "react";

/**
 * Reusable CountUp component for animating numeric strings.
 * Parses the number part, preserves prefixes/suffixes, and animates with easeOutExpo.
 */
const CountUp = ({ value, isVisible, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    // Check if value contains a number
    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const end = parseInt(match[1]);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index + match[1].length);

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeProgress * end);

      setDisplayValue(`${prefix}${currentCount}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, isVisible, duration]);

  return <span>{displayValue}</span>;
};

export default CountUp;
