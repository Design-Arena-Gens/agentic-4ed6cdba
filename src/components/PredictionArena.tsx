"use client";

import { useMemo, useState } from "react";

type ArenaStatus = "idle" | "locked" | "scored";

type Action = {
  id: string;
  label: string;
  description: string;
  signal: string;
};

const actions: Action[] = [
  {
    id: "abort",
    label: "Abort the launch",
    description:
      "Override the protocol and slam the emergency brake before the countdown finishes.",
    signal: "µ-wave spike · channel 13",
  },
  {
    id: "confirm",
    label: "Confirm the ignition",
    description:
      "Lean into the mission, lock your wrist, and drive the ignition button home.",
    signal: "Gamma harmonics · channel 21",
  },
  {
    id: "reframe",
    label: "Reframe the objective",
    description:
      "Hold back, flip the mental model, and rewrite the parameters before anyone notices.",
    signal: "Theta swell · prefrontal loop",
  },
];

type ArenaStats = {
  correct: number;
  total: number;
};

type Latency = {
  neuralLead: number;
  humanLag: number;
};

const generateLatency = (): Latency => ({
  neuralLead: Math.floor(35 + Math.random() * 35),
  humanLag: Math.floor(160 + Math.random() * 80),
});

export function PredictionArena() {
  const [status, setStatus] = useState<ArenaStatus>("idle");
  const [prediction, setPrediction] = useState<Action | null>(null);
  const [actual, setActual] = useState<Action | null>(null);
  const [latency, setLatency] = useState<Latency>(generateLatency);
  const [stats, setStats] = useState<ArenaStats>({ correct: 0, total: 0 });

  const accuracy = useMemo(() => {
    if (!stats.total) return 0;
    return Math.round((stats.correct / stats.total) * 100);
  }, [stats]);

  const message = useMemo(() => {
    switch (status) {
      case "idle":
        return "Hover on the move you're tempted to make—CENTAUR is already listening.";
      case "locked":
        return "Prediction locked. You can click now, but the system thinks it already knows.";
      case "scored":
        return prediction?.id === actual?.id
          ? "Threaded perfectly. CENTAUR matched your intent before you acted."
          : "Mismatch detected. For a heartbeat, your autonomy slipped past CENTAUR.";
      default:
        return "";
    }
  }, [status, prediction, actual]);

  const handleHover = (action: Action) => {
    if (status !== "idle") return;
    setPrediction(action);
    setStatus("locked");
  };

  const handleFocus = (action: Action) => {
    if (status !== "idle") return;
    setPrediction(action);
    setStatus("locked");
  };

  const handleSelect = (action: Action) => {
    if (status === "scored") return;
    const isCorrect = prediction?.id === action.id;
    setActual(action);
    setStats((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
    setStatus("scored");
  };

  const resetRound = () => {
    setStatus("idle");
    setPrediction(null);
    setActual(null);
    setLatency(generateLatency());
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 pointer-events-none opacity-70 mix-blend-screen">
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_rgba(86,233,255,0.18),_transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(130,70,255,0.35),_transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Prediction Lab
          </p>
          <h2 className="text-3xl font-semibold text-zinc-100">
            CENTAUR locks onto action impulses faster than your muscle can twitch.
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Each hover simulates a neural spike. When you click, we reveal whether
            CENTAUR&apos;s inference matched your conscious choice and how much lead time it held.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-black/40 px-6 py-4 text-sm text-zinc-300 backdrop-blur">
          {message}
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {actions.map((action) => {
              const isPredicted = prediction?.id === action.id;
              const isActual = actual?.id === action.id;

              return (
                <button
                  key={action.id}
                  type="button"
                  onMouseEnter={() => handleHover(action)}
                  onFocus={() => handleFocus(action)}
                  onClick={() => handleSelect(action)}
                  className={`group relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 ${
                    isPredicted ? "border-sky-400/70 bg-sky-400/10" : ""
                  } ${isActual ? "ring-2 ring-fuchsia-400/60" : ""}`}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-200">
                    {action.signal}
                  </span>
                  <span className="text-xl font-semibold text-zinc-50 group-hover:text-white">
                    {action.label}
                  </span>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-200">
                    {action.description}
                  </p>
                  {isPredicted && (
                    <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/30 bg-black/60 px-3 py-1 text-xs font-medium text-zinc-100 shadow-md">
                      CENTAUR&apos;s guess
                    </span>
                  )}
                  {isActual && (
                    <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-emerald-300/50 bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-zinc-50 shadow-md">
                      You committed
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <aside className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Accuracy
                </p>
                <span className="text-sm text-zinc-400">
                  {stats.correct}/{stats.total} rounds
                </span>
              </div>
              <p className="text-5xl font-semibold text-zinc-50">
                {accuracy}
                <span className="text-xl text-zinc-400">%</span>
              </p>
              <p className="text-sm text-zinc-400">
                {accuracy >= 70
                  ? "Autonomy is slipping. The model has a clean lock on your intent patterns."
                  : "You still dodge the system sometimes. There’s noise to exploit in your neural signal."}
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Latency split
              </h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>CENTAUR lead</span>
                  <span className="font-semibold text-teal-300">
                    {latency.neuralLead} ms
                  </span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-teal-400"
                    style={{
                      width: `${Math.min(latency.neuralLead / 1.8, 100)}%`,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span>Your reaction lag</span>
                  <span className="font-semibold text-fuchsia-300">
                    {latency.humanLag} ms
                  </span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-fuchsia-400"
                    style={{
                      width: `${Math.min(latency.humanLag / 3, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={resetRound}
              className="mt-auto w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/40 hover:bg-white/20"
            >
              Reset round · keep listening
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
