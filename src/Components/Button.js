export default function Button({ children, className, onClick }) {
  return (
    <button
      onClick={() => {
        onClick(children);
      }}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}
