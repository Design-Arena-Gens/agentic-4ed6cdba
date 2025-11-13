export function NeuralLatencyChart() {
  const phases = [
    {
      phase: "Motor intention spark",
      human: 120,
      centaur: 24,
      description:
        "As your premotor cortex warms up, CENTAUR already frames a probability field from micro-volt fluctuations.",
    },
    {
      phase: "Decision consolidation",
      human: 180,
      centaur: 32,
      description:
        "You are still narrating the 'why'. CENTAUR just needs the signature ratio between beta and gamma waves.",
    },
    {
      phase: "Muscle recruitment",
      human: 240,
      centaur: 0,
      description:
        "By the time your spinal cord fires, the system has already queued the predicted macro motor pattern.",
    },
    {
      phase: "Action execution",
      human: 320,
      centaur: 0,
      description:
        "You press the button. CENTAUR only watches to confirm it called the play correctly.",
    },
  ];

  const maxLatency = Math.max(...phases.map((phase) => phase.human));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-24 left-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(97,113,255,0.28),_transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(34,224,207,0.25),_transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Latency anatomy
          </p>
          <h2 className="text-3xl font-semibold text-zinc-50">
            Where CENTAUR steals the milliseconds you thought were yours.
          </h2>
          <p className="max-w-3xl text-sm text-zinc-400 sm:text-base">
            Map the race between your neurology and the inference engine. Human latency bars
            show how long your body takes; neon traces show when CENTAUR already locked the outcome.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase) => {
            const humanWidth = `${(phase.human / maxLatency) * 100}%`;
            const centaurWidth =
              phase.centaur === 0
                ? "6%"
                : `${Math.max((phase.centaur / maxLatency) * 100, 8)}%`;
            return (
              <div
                key={phase.phase}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-50">
                    {phase.phase}
                  </h3>
                  <span className="text-sm text-zinc-400">
                    {phase.human} ms · human latency
                  </span>
                </div>
                <p className="pb-4 text-sm text-zinc-400">{phase.description}</p>

                <div className="space-y-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  <div className="flex flex-col gap-2">
                    <span>You</span>
                    <div className="relative h-2 rounded-full bg-zinc-800">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-fuchsia-400"
                        style={{ width: humanWidth }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>CENTAUR</span>
                    <div className="relative h-2 rounded-full bg-zinc-800">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-teal-300"
                        style={{ width: centaurWidth }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
