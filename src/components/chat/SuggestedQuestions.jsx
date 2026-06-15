const questions = [
  "How do I deal with tantrums?",
  "Tips for improving communication",
  "Activities suitable for home",
  "When should you visit a doctor?",
];

function SuggestedQuestions({ onSelect }) {
  return (
    <div className="px-4 py-3 border-t border-[var(--border-light)] overflow-x-auto bg-[var(--bg-card)]">
      <div className="flex gap-2 pb-1">
        {questions.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="
              flex-shrink-0
              px-3
              py-1.5
              text-xs
              font-medium
              bg-[var(--primary-50)]
              hover:bg-[var(--primary-200)]
              text-[var(--primary-700)]
              rounded-full
              transition
            "
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;