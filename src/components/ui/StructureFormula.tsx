import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { StructureFormula, TenseStructureFormula, SimpleStructureFormula, StructurePart, ConditionalStructureFormula } from '../../types';

// Type guard to check if formula is tense-style
// function isTenseFormula(formula: StructureFormula): formula is TenseStructureFormula {
//   return 'positive' in formula && 'negative' in formula && 'question' in formula;
// }

interface StructureFormulaDisplayProps {
  formula: StructureFormula;
  title?: string;
  description?: string;
}

// Renders the formula parts as cards
function FormulaParts({ parts }: { parts: StructurePart[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-center py-4">
      {parts.map((part, index) => (
        <div key={index} className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`
              min-w-[100px] p-4 rounded-xl text-center
              ${part.highlight
                ? 'bg-[var(--color-secondary)]/15 border-2 border-[var(--color-secondary)]/30'
                : 'bg-white/5 border-2 border-white/10'
              }
            `}
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                part.highlight ? 'text-[var(--color-secondary)]' : 'text-[var(--color-text-muted)]'
              }`}
            >
              {part.label}
            </span>
            <span
              className={`text-xl font-bold ${
                part.highlight ? 'text-[var(--color-secondary)]' : 'text-[var(--color-text)]'
              }`}
            >
              {part.value}
            </span>
          </motion.div>

          {/* Plus sign between cards (except last) */}
          {index < parts.length - 1 && (
            <span className="text-[var(--color-text-muted)] text-xl font-light">+</span>
          )}
        </div>
      ))}
    </div>
  );
}

// Renders the example result
function ExampleResult({ example, keyId }: { example: string; keyId?: string }) {
  return (
    <div className="text-center pt-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] block mb-3">
        Result
      </span>
      <motion.div
        key={keyId}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg shadow-[var(--color-primary)]/20"
      >
        "{example}"
      </motion.div>
    </div>
  );
}

// Multi-case display with tabs (for tenses and conditionals)
function MultipleCasesFormulaDisplay({ formula }: { formula: TenseStructureFormula | ConditionalStructureFormula }) {
  const caseKeys = Object.keys(formula.cases) as string[];
  const [activeMode, setActiveMode] = useState<string>(caseKeys[0]);

  const modes = caseKeys.map((key) => ({ id: key, label: key.charAt(0).toUpperCase() + key.slice(1) }));

  const currentParts = (formula.cases as Record<string, StructurePart[]>)[activeMode];
  const currentExample = (formula.examples as Record<string, string>)[activeMode];

  return (
    <>
      {/* Mode Tabs */}
      <div className="flex gap-2">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setActiveMode(mode.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeMode === mode.id
                ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/5'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Formula Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <FormulaParts parts={currentParts} />
        </motion.div>
      </AnimatePresence>

      {/* Result Example */}
      <ExampleResult example={currentExample} keyId={`example-${activeMode}`} />
    </>
  );
}

// Simple display without tabs
function SimpleFormulaDisplay({ formula }: { formula: SimpleStructureFormula }) {
  return (
    <>
      <FormulaParts parts={formula.formula} />
      <ExampleResult example={formula.example} />
    </>
  );
}

export function StructureFormulaDisplay({
  formula,
  title = 'The Construction Formula',
  description,
}: StructureFormulaDisplayProps) {
const StructureComponent = useMemo(() => {
  switch (formula.structureType) {
    case 'tense':
    case 'conditional':
      return <MultipleCasesFormulaDisplay formula={formula} />;
    case 'simple':
      return <SimpleFormulaDisplay formula={formula} />;
    default:
      return null;
  }
}, [formula]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-[var(--color-text-muted)] text-sm">{description}</p>
        )}
      </div>

      {/* Render appropriate formula type */}
    
      {StructureComponent}
    </div>
  );
}

