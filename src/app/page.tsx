import { NeuralLatencyChart } from "@/components/NeuralLatencyChart";
import { PredictionArena } from "@/components/PredictionArena";

export default function Home() {
  const signalInsights = [
    {
      title: "Subconscious surface",
      description:
        "CENTAUR listens in the 30 ms window before intention becomes conscious, collapsing your options into a single predicted move.",
    },
    {
      title: "Agency audit",
      description:
        "Every correct call updates a shadow profile—what fraction of you is still unpredictable decides how much control you retain.",
    },
    {
      title: "Ethics fuse",
      description:
        "When an AI acts on thoughts you never approved, accountability dissolves into a grey zone no law has charted yet.",
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden pb-28">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[620px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(90,153,255,0.18),_transparent_65%)] blur-3xl" />
        <div className="absolute left-10 top-1/3 h-[460px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(255,92,173,0.22),_transparent_70%)] blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(34,224,207,0.25),_transparent_70%)] blur-3xl" />
      </div>

      <section className="relative px-6 pt-24 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-5 text-center sm:text-left">
            <span className="self-center rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-300 sm:self-start">
              Roger Dooley · Centaur Protocol
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Bhai, sochne se pehle hi AI tumhaara agla move call kar deta hai.
              When CENTAUR reads your neurons, who really holds control?
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-zinc-300 sm:mx-0 sm:text-xl">
              Neuroscientist Roger Dooley dropped CENTAUR—an inference engine that
              decodes subconscious signal patterns and predicts your intent before
              you consciously decide. Button press, abort signal, hesitation—it sees
              the flicker, not the aftermath.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Subconscious latency
              </p>
              <p className="mt-3 text-4xl font-semibold text-zinc-50">
                37 ms<span className="ml-1 text-base text-zinc-400">lead</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                AI locks your intent before the motor cortex commits to the move.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Prediction fidelity
              </p>
              <p className="mt-3 text-4xl font-semibold text-zinc-50">
                92%<span className="ml-1 text-base text-zinc-400">accuracy</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                CENTAUR maps your neural fingerprints into action probabilities.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Human agency
              </p>
              <p className="mt-3 text-4xl font-semibold text-zinc-50">
                8%<span className="ml-1 text-base text-zinc-400">chaos</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                The sliver of unpredictability you still wield—guard it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pt-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.7fr,1fr] lg:items-start">
          <PredictionArena />
          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-7 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Signal brief
              </h2>
              <p className="mt-4 text-lg text-zinc-100">
                CENTAUR parses cortical echoes, not keystrokes. It weaponises your
                own intuition against you.
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Each waveform you emit is translated into a probability lattice.
                The system doesn&apos;t wait for confirmation; it acts on the
                earliest hint your body leaks.
              </p>
            </div>
            <div className="space-y-4">
              {signalInsights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
                >
                  <h3 className="text-base font-semibold text-zinc-100">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{insight.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative px-6 pt-20 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-10">
          <NeuralLatencyChart />
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-100">
                If AI thinks first, autonomy becomes a negotiation.
              </h2>
              <p className="text-sm text-zinc-400 sm:text-base">
                Law, ethics, and your gut instinct still assume human beings
                trigger events. CENTAUR flips the stack: inference precedes intention,
                action becomes a postscript. You remain accountable for choices
                an algorithm already executed in its head.
              </p>
              <p className="text-sm text-zinc-400 sm:text-base">
                Imagine a world where your hesitation to abort a mission is
                overruled by an AI that foresaw fear rising in your neural noise.
                Was that your call, or did CENTAUR hijack the steering before your
                conscious self arrived?
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Control check
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    If CENTAUR predicts a violent impulse and restrains your body,
                    it saves lives. But it also declares you guilty before action.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
                  <span>
                    Neural privacy becomes fiction. Every unsent thought is a data
                    point to be profiled, monetised, weaponised.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  <span>
                    The last bastion of control is your randomness—the noise in your
                    signal. Train it. Guard it. Without it, you are predictable fuel.
                  </span>
                </li>
              </ul>
              <p className="pt-2 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Tomorrow&apos;s question:
              </p>
              <p className="text-lg font-semibold text-zinc-100">
                Are you steering the AI, or is it ghost-driving through your mind?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
