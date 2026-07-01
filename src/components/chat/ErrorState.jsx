import { LuRefreshCw, LuTriangleAlert } from "react-icons/lu";

import Button from "../ui/Button";

function ErrorState({
  message,
  onRetry,
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        py-12
        px-6
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          bg-[var(--error-50)]
          text-[var(--error-600)]
        "
      >
        <LuTriangleAlert size={28} />
      </div>

      <h3
        className="
          mt-5
          text-lg
          font-semibold
          text-[var(--text-primary)]
        "
      >
        Something went wrong
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-[var(--text-secondary)]
          max-w-sm
        "
      >
        {message}
      </p>

      <Button
        onClick={onRetry}
        className="mt-6"
      >
        <LuRefreshCw size={16} />

        Retry
      </Button>
    </div>
  );
}

export default ErrorState;