import { useState, useRef, useEffect } from "react";

function DropdownMenu({ trigger, items = [], className = "",
  itemClassName = "", }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {open && (
        <div
          className={`absolute right-0 mt-2 w-48 bg-[var(--bg-card)] rounded-xl border border-[var(--border-light)] shadow-lg overflow-hidden z-50 ${className} >`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick?.();
                setOpen(false);
              }}
              className=
               {` w-full flex items-center px-4 py-3 text-left text-sm text-[var(--text-primary)] hover:bg-[var(--bg-hover)]transition ${itemClassName} ${item.className || ""}`}
            >
              {<span className="mr-2">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;