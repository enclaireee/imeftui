export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © 2026 IME FTUI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
