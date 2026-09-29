import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Shield,
  FileText,
  AlertTriangle,
  Info,
  Lock,
  CheckCircle,
  ExternalLink,
  Zap,
  Globe,
  Sliders,
  Scale,
  Cpu,
} from 'lucide-react';
import { openSmartLink } from '../utils/adsterra';

export type PolicyPageType = 'about' | 'terms' | 'security' | 'disclaimer';

interface LegalPolicyModalProps {
  pageType: PolicyPageType;
  isOpen: boolean;
  onClose: () => void;
  onSwitchPage?: (type: PolicyPageType) => void;
}

export const LegalPolicyModal: React.FC<LegalPolicyModalProps> = ({
  pageType,
  isOpen,
  onClose,
  onSwitchPage,
}) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen, pageType]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#09090e] border border-white/[0.12] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-slate-200">
        
        {/* Top Header Strip with Prominent Blue URL Breadcrumb */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#12121e] via-[#10101c] to-[#0c0c16] border-b border-white/[0.08] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#ff0080]" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
            <div className="h-5 w-[1px] bg-white/[0.1] hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#00f0ff] hidden md:inline">
                🌐 tranding-sco.com/legal/{pageType}
              </span>
            </div>
          </div>

          {/* Quick Page Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#141422] p-1 rounded-xl border border-white/[0.06] text-xs">
            {(['about', 'terms', 'security', 'disclaimer'] as PolicyPageType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => onSwitchPage && onSwitchPage(tab)}
                className={`px-2.5 py-1 rounded-lg capitalize font-mono text-[11px] transition cursor-pointer ${
                  pageType === tab
                    ? 'bg-[#00ff88] text-black font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-slate-300">
          
          {/* ABOUT US PAGE */}
          {pageType === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff0080]/20 border border-[#ff0080]/40 flex items-center justify-center text-[#ff0080]">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-white">About GOO-TRANDING</h1>
                  <p className="text-xs font-mono text-slate-400">Autonomous Real-Time Global Search Normalization & Intelligence</p>
                </div>
              </div>

              <div className="space-y-4">
                <p>
                  <strong>GOO-TRANDING</strong> is a high-frequency trend discovery and telemetry platform created to synthesize search spikes, breaking news events, and social sentiment across 38+ countries in real time. We replace speculative hype with mathematically grounded scoring and verifiable citations.
                </p>

                <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00ff88]" />
                  Our Core Architecture:
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-400">
                  <li><strong>7-Factor Normalized Algorithm:</strong> We weigh search velocity, cross-regional diffusion, Wikimedia view correlations, citation density, and public engagement to filter out spam and transient bot manipulation.</li>
                  <li><strong>Zero-Hallucination Anti-Fake Shield:</strong> All incoming trends are cross-referenced with peer-reviewed Wikimedia REST knowledge endpoints and primary news agency feeds.</li>
                  <li><strong>Multi-Channel Content Acceleration:</strong> We empower creators, journalists, and businesses with zero-competition long-tail SEO keywords, instant YouTube Shorts scripts, and executive dossiers.</li>
                </ul>

                <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#00f0ff]" />
                  Global Coverage & Edge Distribution:
                </h2>
                <p className="text-slate-400">
                  Operated across globally distributed Anycast edge nodes, GOO-TRANDING guarantees sub-20ms edge latency for users in India, the United States, Europe, Southeast Asia, and South America, delivering instantaneous insights in 13 world languages.
                </p>
              </div>
            </div>
          )}

          {/* TERMS AND CONDITIONS PAGE */}
          {pageType === 'terms' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/20 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-white">Terms & Conditions of Service</h1>
                  <p className="text-xs font-mono text-slate-400">Effective Date: 2026 • Universal User & Developer Agreement</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300">
                <p>
                  Welcome to GOO-TRANDING. By accessing our web application, telemetry APIs, RSS feeds, or AI analysis tools, you agree to comply with and be bound by the following comprehensive terms and conditions:
                </p>

                <h2 className="text-sm font-bold text-white">1. Permitted Use & Fair Access</h2>
                <p className="text-slate-400">
                  You are granted a non-exclusive, non-transferable license to browse trend datasets, generate scripts, and utilize our automated research tools for individual, editorial, or commercial research purposes. Automated high-frequency scraping that degrades server availability is strictly prohibited.
                </p>

                <h2 className="text-sm font-bold text-white">2. Intellectual Property & Attribution</h2>
                <p className="text-slate-400">
                  Summaries and telemetry outputs are generated autonomously. Citations referencing Wikimedia are licensed under the Creative Commons Attribution-ShareAlike (CC BY-SA) license. Users may publish generated scripts and blog posts freely with optional attribution to GOO-TRANDING.
                </p>

                <h2 className="text-sm font-bold text-white">3. Monetization & Third-Party Partner Disclosure</h2>
                <p className="text-slate-400">
                  To provide 100% free access without subscription paywalls, GOO-TRANDING integrates verified third-party monetization partner links (such as Adsterra SmartLinks). Interactions with sponsored links are governed by the respective partner privacy policies.
                </p>

                <h2 className="text-sm font-bold text-white">4. Limitation of Liability</h2>
                <p className="text-slate-400">
                  In no event shall GOO-TRANDING, its operators, or technical contributors be liable for financial decisions, advertising expenditures, or content distribution choices made based on algorithmic trend rankings or predictive models.
                </p>
              </div>
            </div>
          )}

          {/* SECURITY & DATA PROTECTION PAGE */}
          {pageType === 'security' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-white">Security & Data Protection Standards</h1>
                  <p className="text-xs font-mono text-slate-400">Zero-Tracker Policy • TLS 1.3 Encryption • Edge Isolated</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300">
                <p>
                  Security, data minimization, and privacy-by-design are fundamental pillars of GOO-TRANDING. We believe users should explore global knowledge without invasive behavioral tracking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-white font-bold text-xs flex items-center gap-1.5 mb-1">
                      <Shield className="w-4 h-4 text-[#00ff88]" />
                      Zero Personal Data Storage
                    </div>
                    <p className="text-[11px] text-slate-400">
                      We do not require user account logins, email addresses, passwords, or credit cards. All bookmarks and theme preferences remain strictly within your device LocalStorage.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="text-white font-bold text-xs flex items-center gap-1.5 mb-1">
                      <CheckCircle className="w-4 h-4 text-[#00f0ff]" />
                      End-to-End TLS 1.3 Encryption
                    </div>
                    <p className="text-[11px] text-slate-400">
                      All data in transit is encrypted using modern TLS 1.3 cryptographic suites with strict HTTP Strict Transport Security (HSTS) and modern cipher negotiation.
                    </p>
                  </div>
                </div>

                <h2 className="text-sm font-bold text-white pt-2">Compliance & Vulnerability Reporting</h2>
                <p className="text-slate-400">
                  Our architecture conforms to the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) standards through complete non-collection of personally identifiable information (PII). Security researchers may report vulnerabilities responsibly to our security engineering team.
                </p>
              </div>
            </div>
          )}

          {/* DISCLAIMER PAGE */}
          {pageType === 'disclaimer' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ffdd00]/20 border border-[#ffdd00]/40 flex items-center justify-center text-[#ffdd00]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-white">Algorithmic & Financial Disclaimer</h1>
                  <p className="text-xs font-mono text-slate-400">Objective Information • No Investment Advice • Independent Synthesis</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300">
                <div className="p-4 rounded-xl bg-[#ffdd00]/10 border border-[#ffdd00]/30 text-slate-200">
                  <strong>Notice:</strong> All data, velocity percentages, ranking scores, and summaries presented on GOO-TRANDING are compiled by autonomous statistical algorithms for informational and educational purposes only.
                </div>

                <h2 className="text-sm font-bold text-white">1. No Financial or Investment Advice</h2>
                <p className="text-slate-400">
                  Search volume spikes regarding equities, public companies, commodities, or cryptocurrencies reflect public curiosity and social search demand, not intrinsic financial value. Nothing on this website constitutes financial advice, stock recommendations, or trading guidance.
                </p>

                <h2 className="text-sm font-bold text-white">2. No Medical or Health Advice</h2>
                <p className="text-slate-400">
                  Health and medical topics indexed by our engines are synthesized from public news wires and encyclopedic databases. They must never be considered medical diagnosis, treatment, or clinical advice. Consult qualified healthcare professionals for medical decisions.
                </p>

                <h2 className="text-sm font-bold text-white">3. Third-Party Trademarks & External Links</h2>
                <p className="text-slate-400">
                  Google, YouTube, Reddit, Wikipedia, and other third-party product names and logos displayed are trademarks of their respective owners. GOO-TRANDING is an independent research platform and is not officially affiliated with, endorsed by, or sponsored by Google LLC or Wikimedia Foundation.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#08080c] border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={(e) => openSmartLink(e)}
            className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-[#ffdd00]" />
            <span>Monetization Protocol Active</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/[0.1] hover:bg-white/[0.18] text-white text-xs font-bold transition cursor-pointer"
          >
            Close & Return
          </button>
        </div>

      </div>
    </div>
  );
};
