export function Footer() {
  return (
    <footer className="glass mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-lg font-semibold gradient-text">ESL Tutor</span>
          </div>
          
          <p className="text-[var(--color-text-muted)] text-sm">
            Learn English grammar step by step
          </p>
          
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} ESL Tutor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
