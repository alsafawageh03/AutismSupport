function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          bg-[var(--bg-card)]
          rounded-2xl
          shadow-xl
          w-full
          max-w-lg
          p-6
          mx-4
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
            mb-4
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-[var(--text-primary)]
            "
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              text-[var(--text-muted)]
              hover:text-[var(--text-secondary)]
            "
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;