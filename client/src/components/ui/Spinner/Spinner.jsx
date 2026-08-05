const Spinner = () => {
  return (
    <div
      className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--primary)]"
      aria-label="Loading"
      role="status"
    />
  );
};

export default Spinner;
