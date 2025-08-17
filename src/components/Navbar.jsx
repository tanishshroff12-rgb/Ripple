export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between border-b border-black/10">
        <a href="/" className="text-lg font-semibold tracking-tight text-sky-700">Tanish Finance</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:opacity-70">Hello</a>
          <a href="#" className="hover:opacity-70">Stocks</a>
        </nav>
      </div>
    </header>
  );
}
