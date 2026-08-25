import { useEffect, useState } from "react";

/**
 * Thin scroll-progress bar — mobile ONLY (hidden on sm+ breakpoints).
 * Sits above the fixed nav at z-60. Height is 3px so it never
 * covers or shifts any content.
 */
export function MobileProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setPct(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    /* sm:hidden keeps this 100% invisible on tablet/desktop */
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent sm:hidden"
    >
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
