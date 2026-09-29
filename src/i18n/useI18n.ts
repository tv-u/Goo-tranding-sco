import { UIKey, t, LOCALIZED_TRENDS } from './translations';
import { TrendCategory, TrendItem, Article } from '../types';
import { ALL_LOCALIZED_TRENDS } from './trendTranslations';
import { getLocalizedArticle as localizeArticle } from './articleTranslations';

export function useI18n(langCode: string = 'en') {
  const safeLang = langCode || 'en';
  const translate = (key: UIKey) => t(key, safeLang);

  const getLocalizedCategory = (cat: TrendCategory | string): string => {
    if (!cat) return '';
    switch (cat.toLowerCase()) {
      case 'all':
        return translate('cat_all');
      case 'technology':
        return translate('cat_technology');
      case 'science':
        return translate('cat_science');
      case 'world':
        return translate('cat_world');
      case 'business':
        return translate('cat_business');
      case 'entertainment':
        return translate('cat_entertainment');
      case 'sports':
        return translate('cat_sports');
      case 'health':
        return translate('cat_health');
      default:
        return cat;
    }
  };

  const getLocalizedTrend = (trend: TrendItem): TrendItem => {
    if (!trend) return trend;
    const deepEntry = ALL_LOCALIZED_TRENDS[safeLang]?.[trend.slug];
    if (deepEntry) {
      return {
        ...trend,
        topic: deepEntry.topic,
        summary: deepEntry.summary,
      };
    }
    const fallbackDict = LOCALIZED_TRENDS[safeLang];
    if (fallbackDict && fallbackDict[trend.slug]) {
      return {
        ...trend,
        topic: fallbackDict[trend.slug].topic,
        summary: fallbackDict[trend.slug].summary,
      };
    }
    return trend;
  };

  const getLocalizedArticle = (article: Article): Article => {
    return localizeArticle(article, safeLang);
  };

  return {
    t: translate,
    getLocalizedCategory,
    getLocalizedTrend,
    getLocalizedArticle,
    langCode: safeLang,
  };
}
