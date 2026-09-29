import React from 'react';
import { Activity, Signal } from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface TrendSignalsMapProps {
  trends: TrendItem[];
  selectedCountry: string;
  onSelectCountry: (code: string) => void;
  currentLangCode: string;
}

export const TrendSignalsMap: React.FC<TrendSignalsMapProps> = ({
  trends,
  selectedCountry,
  onSelectCountry,
  currentLangCode,
}) => {
  const { t } = useI18n(currentLangCode);

  const getRegionName = (name: string) => {
    if (currentLangCode === 'hi') {
      if (name.includes('South Asia')) return 'दक्षिण एशिया (भारत)';
      if (name.includes('North America')) return 'उत्तरी अमेरिका';
      if (name.includes('Western Europe')) return 'पश्चिमी यूरोप';
      if (name.includes('East Asia')) return 'पूर्वी एशिया (जापान)';
      if (name.includes('Latin America')) return 'लैटिन अमेरिका (ब्राज़ील)';
      if (name.includes('Middle East')) return 'मध्य पूर्व (UAE)';
    } else if (currentLangCode === 'ur') {
      if (name.includes('South Asia')) return 'جنوبی ایشیا (بھارت)';
      if (name.includes('North America')) return 'شمالی امریکہ';
      if (name.includes('Western Europe')) return 'مغربی یورپ';
      if (name.includes('East Asia')) return 'مشرقی ایشیا (جاپان)';
      if (name.includes('Latin America')) return 'لاطینی امریکہ (برازیل)';
      if (name.includes('Middle East')) return 'مشرق وسطیٰ';
    } else if (currentLangCode === 'es') {
      if (name.includes('South Asia')) return 'Sur de Asia (India)';
      if (name.includes('North America')) return 'América del Norte';
      if (name.includes('Western Europe')) return 'Europa Occidental';
      if (name.includes('East Asia')) return 'Asia Oriental (Japón)';
      if (name.includes('Latin America')) return 'América Latina (Brasil)';
      if (name.includes('Middle East')) return 'Oriente Medio';
    } else if (currentLangCode === 'fr') {
      if (name.includes('South Asia')) return 'Asie du Sud (Inde)';
      if (name.includes('North America')) return 'Amérique du Nord';
      if (name.includes('Western Europe')) return 'Europe de l\'Ouest';
      if (name.includes('East Asia')) return 'Asie de l\'Est (Japon)';
      if (name.includes('Latin America')) return 'Amérique Latine (Brésil)';
      if (name.includes('Middle East')) return 'Moyen-Orient';
    } else if (currentLangCode === 'ar') {
      if (name.includes('South Asia')) return 'جنوب آسيا (الهند)';
      if (name.includes('North America')) return 'أمريكا الشمالية';
      if (name.includes('Western Europe')) return 'أوروبا الغربية';
      if (name.includes('East Asia')) return 'شرق آسيا (اليابان)';
      if (name.includes('Latin America')) return 'أمريكا اللاتينية';
      if (name.includes('Middle East')) return 'الشرق الأوسط';
    } else if (currentLangCode === 'ja') {
      if (name.includes('South Asia')) return '南アジア (インド)';
      if (name.includes('North America')) return '北米 (米国)';
      if (name.includes('Western Europe')) return '西欧 (フランス・ドイツ)';
      if (name.includes('East Asia')) return '東アジア (日本)';
      if (name.includes('Latin America')) return '中南米 (ブラジル)';
      if (name.includes('Middle East')) return '中東 (UAE)';
    } else if (currentLangCode === 'zh') {
      if (name.includes('South Asia')) return '南亚 (印度)';
      if (name.includes('North America')) return '北美 (美国)';
      if (name.includes('Western Europe')) return '西欧 (法德)';
      if (name.includes('East Asia')) return '东亚 (日本)';
      if (name.includes('Latin America')) return '拉美 (巴西)';
      if (name.includes('Middle East')) return '中东 (阿联酋)';
    }
    return name;
  };

  const regions = [
    { code: 'IN', name: 'South Asia (India)', count: 14, velocity: '+284%', topTopic: 'ITER Cryostat & Sovereign AI' },
    { code: 'US', name: 'North America', count: 18, velocity: '+216%', topTopic: 'Solid-State Battery & NASA Artemis' },
    { code: 'FR', name: 'Western Europe', count: 15, velocity: '+188%', topTopic: 'ITER Fusion & Cannes Standards' },
    { code: 'JP', name: 'East Asia (Japan)', count: 12, velocity: '+195%', topTopic: 'Solid-State EV Lines & QKD Mesh' },
    { code: 'BR', name: 'Latin America', count: 9, velocity: '+142%', topTopic: 'G20 Project Agora Digital Trade' },
    { code: 'AE', name: 'Middle East', count: 11, velocity: '+165%', topTopic: 'Autonomous eVTOL Corridors' },
  ];

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-[#0e0e14] border border-white/[0.08] rounded-2xl p-5 sm:p-7 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
              <span>{t('regional_hubs_badge')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {t('regional_hubs_title')}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {t('regional_hubs_desc')}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-slate-300 bg-[#161622] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <Activity className="w-3.5 h-3.5 text-[#ff0080]" />
              <span>{t('active_countries')}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 bg-[#161622] px-3 py-1.5 rounded-lg border border-white/[0.06]">
              <Signal className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>{t('latency')}</span>
            </span>
          </div>
        </div>

        {/* Interactive Region Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 relative z-10">
          {regions.map((region) => {
            const isSelected = selectedCountry === region.code;
            return (
              <button
                key={region.code}
                onClick={() => onSelectCountry(isSelected ? 'ALL' : region.code)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#ff0080]/20 to-[#7928ca]/20 border-[#ff0080] shadow-lg'
                    : 'bg-[#13131b] border-white/[0.06] hover:border-white/20 hover:bg-[#181824]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                    <span className="text-xs font-bold text-white font-mono">
                      {getRegionName(region.name)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00ff88]">
                    {region.velocity}
                  </span>
                </div>

                <div className="text-xs text-slate-300 font-medium line-clamp-1 mb-2">
                  {t('key_signal')} {region.topTopic}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/[0.05]">
                  <span>{region.count} {t('breakout_topics')}</span>
                  <span className={isSelected ? 'text-[#ff0080] font-bold' : 'text-slate-400'}>
                    {isSelected ? t('filtered') : t('click_to_filter')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
