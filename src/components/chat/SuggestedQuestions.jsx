const DEFAULT_QUESTIONS = [
  "What are the early signs of autism?",
  "Why does my child repeat words?",
  "How can I improve communication?",
  "Activities for children with autism?",
];

function SuggestedQuestions({
  questions = DEFAULT_QUESTIONS,
  onSelect,
  disabled = false,
}) {
  if (!questions.length) return null;

  return (
    <div className="px-5 py-3 border-t border-[var(--border-light)] bg-[var(--bg-card)]">

      <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
        Suggested Questions
      </p>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(question)}
            className="
              flex-shrink-0
              px-4
              py-2
              rounded-full
              text-sm
              transition-all
              border
              border-[var(--primary-200)]
              bg-[var(--primary-50)]
              text-[var(--primary-700)]
              hover:bg-[var(--primary-100)]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {question}
          </button>
        ))}
      </div>

    </div>
  );
}

export default SuggestedQuestions;