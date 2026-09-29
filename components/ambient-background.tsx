export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <div className="absolute inset-0 bg-dot-grid bg-dots opacity-[0.25] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/20 blur-[140px]" />
      <div className="absolute top-[40%] right-[-10%] h-[420px] w-[420px] rounded-full bg-ember/10 blur-[130px]" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
