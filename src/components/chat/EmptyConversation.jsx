import ChatAvatar from "./ChatAvatar";

function EmptyConversation() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        flex-1
        px-8
        py-16
      "
    >
      <ChatAvatar size={72} />

      <h2
        className="
          mt-5
          text-2xl
          font-semibold
          text-[var(--text-primary)]
        "
      >
        How can I help today?
      </h2>

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-6
          text-[var(--text-secondary)]
        "
      >
        Ask me questions about autism, child behavior,
        communication, daily activities, therapies,
        and caregiver guidance.
      </p>

    </div>
  );
}

export default EmptyConversation;