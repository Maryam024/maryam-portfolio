export function ResearchPipelineDiagram() {
  return (
    <svg
      viewBox="0 0 560 460"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of the MedInsight retrieval-augmented pipeline: a query image and question either go straight to BLIP-2, or first through a CLIP + FAISS retriever over ROCOv2 before reaching BLIP-2, producing a scored answer."
    >
      <defs>
        <linearGradient id="mi-signal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#3450D6" />
        </linearGradient>
      </defs>

      {/* input */}
      <rect x="180" y="12" width="200" height="52" rx="14" className="fill-fg/[0.04] stroke-line-strong" />
      <text x="280" y="34" textAnchor="middle" className="fill-ink" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
        VQA-RAD test example
      </text>
      <text x="280" y="52" textAnchor="middle" className="fill-ink-faint" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
        image + clinical question
      </text>

      <path d="M280 64 L280 88" className="stroke-line-strong" strokeWidth="1.5" />
      <path d="M280 64 L275 82 L285 82 Z" className="fill-fg/[0.18]" />

      {/* split arrows */}
      <path d="M280 88 L150 120" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
      <path d="M280 88 L410 120" className="stroke-line-strong" strokeWidth="1.5" fill="none" />

      {/* baseline branch */}
      <rect x="60" y="122" width="180" height="46" rx="12" className="fill-fg/[0.03] stroke-line" />
      <text x="150" y="142" textAnchor="middle" className="fill-ink-dim" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Baseline path
      </text>
      <text x="150" y="158" textAnchor="middle" className="fill-ink-faint" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        no retrieval used
      </text>

      <path d="M150 168 L150 196" className="stroke-line-strong" strokeWidth="1.5" />
      <rect x="60" y="198" width="180" height="46" rx="12" className="fill-fg/[0.02] stroke-line" />
      <text x="150" y="222" textAnchor="middle" className="fill-ink-dim" fontSize="11" fontFamily="Inter, sans-serif">
        Question-only prompt
      </text>
      <text x="150" y="236" textAnchor="middle" className="fill-ink-faint" fontSize="9" fontFamily="JetBrains Mono, monospace">
        no evidence block
      </text>

      {/* RAG branch */}
      <rect x="330" y="122" width="180" height="46" rx="12" className="fill-signal/[0.08] stroke-signal/[0.35]" />
      <text x="420" y="142" textAnchor="middle" className="fill-ink" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Retrieval-augmented
      </text>
      <text x="420" y="158" textAnchor="middle" className="fill-signal-soft" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        CLIP image encoder
      </text>

      <path d="M420 168 L420 196" className="stroke-signal/40" strokeWidth="1.5" />
      <rect x="330" y="198" width="180" height="46" rx="12" className="fill-signal/[0.06] stroke-signal/30" />
      <text x="420" y="218" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        FAISS index search
      </text>
      <text x="420" y="234" textAnchor="middle" className="fill-signal-soft" fontSize="9" fontFamily="JetBrains Mono, monospace">
        ROCOv2 · ~60K pairs · cosine sim
      </text>

      <path d="M420 244 L420 272" className="stroke-signal/40" strokeWidth="1.5" />
      <rect x="330" y="274" width="180" height="46" rx="12" className="fill-bloom/[0.08] stroke-bloom/30" />
      <text x="420" y="294" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        Prompt + evidence
      </text>
      <text x="420" y="310" textAnchor="middle" className="fill-bloom-soft" fontSize="9" fontFamily="JetBrains Mono, monospace">
        top-k captions prepended
      </text>

      {/* merge into shared generation */}
      <path d="M150 244 L150 300 L280 344" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
      <path d="M420 320 L420 344 L280 344" className="stroke-signal/35" strokeWidth="1.5" fill="none" />

      <rect x="150" y="346" width="260" height="52" rx="14" fill="url(#mi-signal)" opacity="0.16" className="stroke-signal/40" />
      <text x="280" y="368" textAnchor="middle" className="fill-ink" fontSize="12.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Shared generation — BLIP-2
      </text>
      <text x="280" y="386" textAnchor="middle" className="fill-signal-soft" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        greedy decode · identical for both conditions
      </text>

      <path d="M280 398 L280 420" className="stroke-line-strong" strokeWidth="1.5" />
      <path d="M280 398 L275 414 L285 414 Z" className="fill-fg/[0.18]" />

      <rect x="140" y="420" width="280" height="34" rx="10" className="fill-fg/[0.04] stroke-line-strong" />
      <text x="280" y="442" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        Answer + scoring · exact match · BLEU-4 · ROUGE-L
      </text>
    </svg>
  );
}
