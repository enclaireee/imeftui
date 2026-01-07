import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © 2026 IME FTUI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/nest_ui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/company/nest-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:nestui.ft@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
