import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block text-xs md:text-sm px-3 py-1 rounded-full border border-black/15 bg-white/60 backdrop-blur">
              Finance tools
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-extrabold leading-tight">
              Build, price, and explore markets.
            </h1>
            <p className="mt-5 text-base md:text-lg text-neutral-700">
              Professional financial calculators and tools for investors, traders, and analysts.
              Get real-time data and powerful insights to make informed decisions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button>Try Stocks</Button>
              <Button variant="ghost">Say Hello</Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Black–Scholes" subtitle="Options">
              Price calls & puts with greeks. Fast, accurate, with scenarios.
            </Card>
            <Card title="Investment Calculator" subtitle="Wealth">
              Forecast returns with contributions, fees, and drawdowns.
            </Card>
            <Card title="Strategy Visualizer" subtitle="Backtests">
              Explore rules, P&L paths, and risk metrics on sample data.
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Tanish Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
