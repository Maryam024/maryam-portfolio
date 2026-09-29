export function MelanomaPipelineDiagram() {
  return (
    <svg
      viewBox="0 0 560 460"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of the semi-supervised melanoma detection pipeline: labeled and unlabeled histopathology images feed a shared representation-learning stage, which trains a semi-supervised model for melanoma classification."
    >
      <defs>
        <linearGradient id="ml-signal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EEBC0" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>

      {/* input */}
      <rect x="150" y="12" width="260" height="52" rx="14" className="fill-fg/[0.04] stroke-line-strong" />
      <text x="280" y="34" textAnchor="middle" className="fill-ink" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
        H&amp;E histopathology corpus
      </text>
      <text x="280" y="52" textAnchor="middle" className="fill-ink-faint" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
        expert-labeled + unlabeled slides
      </text>

      <path d="M280 64 L280 88" className="stroke-line-strong" strokeWidth="1.5" />
      <path d="M280 64 L275 82 L285 82 Z" className="fill-fg/[0.18]" />

      {/* split arrows */}
      <path d="M280 88 L150 120" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
      <path d="M280 88 L410 120" className="stroke-line-strong" strokeWidth="1.5" fill="none" />

      {/* labeled branch */}
      <rect x="60" y="122" width="180" height="46" rx="12" className="fill-fg/[0.03] stroke-line" />
      <text x="150" y="142" textAnchor="middle" className="fill-ink-dim" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Labeled subset
      </text>
      <text x="150" y="158" textAnchor="middle" className="fill-ink-faint" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        expert-annotated, small
      </text>

      <path d="M150 168 L150 196" className="stroke-line-strong" strokeWidth="1.5" />
      <rect x="60" y="198" width="180" height="46" rx="12" className="fill-fg/[0.02] stroke-line" />
      <text x="150" y="222" textAnchor="middle" className="fill-ink-dim" fontSize="11" fontFamily="Inter, sans-serif">
        Supervised signal
      </text>
      <text x="150" y="236" textAnchor="middle" className="fill-ink-faint" fontSize="9" fontFamily="JetBrains Mono, monospace">
        melanoma / benign
      </text>

      {/* unlabeled branch */}
      <rect x="330" y="122" width="180" height="46" rx="12" className="fill-mint/[0.08] stroke-mint/[0.35]" />
      <text x="420" y="142" textAnchor="middle" className="fill-ink" fontSize="11.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Unlabeled subset
      </text>
      <text x="420" y="158" textAnchor="middle" className="fill-mint-soft" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        far larger, no annotation
      </text>

      <path d="M420 168 L420 196" className="stroke-mint/40" strokeWidth="1.5" />
      <rect x="330" y="198" width="180" height="46" rx="12" className="fill-mint/[0.06] stroke-mint/30" />
      <text x="420" y="218" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        Representation learning
      </text>
      <text x="420" y="234" textAnchor="middle" className="fill-mint-soft" fontSize="9" fontFamily="JetBrains Mono, monospace">
        autoencoder / self-supervised
      </text>

      <path d="M420 244 L420 272" className="stroke-mint/40" strokeWidth="1.5" />
      <rect x="330" y="274" width="180" height="46" rx="12" className="fill-bloom/[0.08] stroke-bloom/30" />
      <text x="420" y="294" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        Consistency / pseudo-label
      </text>
      <text x="420" y="310" textAnchor="middle" className="fill-bloom-soft" fontSize="9" fontFamily="JetBrains Mono, monospace">
        confidence-gated
      </text>

      {/* merge into shared training */}
      <path d="M150 244 L150 300 L280 344" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
      <path d="M420 320 L420 344 L280 344" className="stroke-mint/35" strokeWidth="1.5" fill="none" />

      <rect x="140" y="346" width="280" height="52" rx="14" fill="url(#ml-signal)" opacity="0.16" className="stroke-mint/40" />
      <text x="280" y="368" textAnchor="middle" className="fill-ink" fontSize="12.5" fontWeight="600" fontFamily="Inter, sans-serif">
        Semi-supervised training
      </text>
      <text x="280" y="386" textAnchor="middle" className="fill-mint-soft" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
        CNN / ViT backbone · joint objective
      </text>

      <path d="M280 398 L280 420" className="stroke-line-strong" strokeWidth="1.5" />
      <path d="M280 398 L275 414 L285 414 Z" className="fill-fg/[0.18]" />

      <rect x="120" y="420" width="320" height="34" rx="10" className="fill-fg/[0.04] stroke-line-strong" />
      <text x="280" y="442" textAnchor="middle" className="fill-ink" fontSize="11" fontFamily="Inter, sans-serif">
        Melanoma prediction · Sensitivity · Specificity · ROC-AUC
      </text>
    </svg>
  );
}
