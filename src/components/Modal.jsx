export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1E1E1E] rounded-3xl p-6 relative w-full max-w-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
