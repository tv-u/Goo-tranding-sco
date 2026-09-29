import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('TRANDING-SCO Error Boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#ff0080]/10 border border-[#ff0080]/30 flex items-center justify-center mb-6">
            <span className="text-3xl">⚡</span>
          </div>
          <h1 className="text-2xl font-black mb-3">TRANDING-SCO Telemetry Ready</h1>
          <p className="text-slate-400 max-w-md text-sm mb-6">
            Connecting to live signal nodes. Click below to refresh telemetry state.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity"
          >
            Reload Dashboard
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
