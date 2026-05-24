import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-[#070b12] px-6 py-24 text-white">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center">
            <div
              className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border text-2xl font-black"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-soft)",
              }}
            >
              KP
            </div>

            <h1 className="text-3xl font-black">
              Something went wrong.
            </h1>

            <p className="mt-4 leading-7 text-slate-300">
              The portfolio interface failed to load correctly. Please refresh
              the page or try again later.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 rounded-2xl px-6 py-4 font-semibold text-slate-950"
              style={{
                background: "var(--accent-gradient)",
              }}
            >
              Refresh Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}