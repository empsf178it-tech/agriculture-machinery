import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('fieldcore_lang') || 'en');
  const [comparedIds, setComparedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('fieldcore_compared');
      return saved ? JSON.parse(saved) : ['pw900', 'mt600'];
    } catch {
      return ['pw900', 'mt600'];
    }
  });

  useEffect(() => {
    localStorage.setItem('fieldcore_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('fieldcore_compared', JSON.stringify(comparedIds));
  }, [comparedIds]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let result = translations[lang] || translations['en'];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // Fallback to English if translation missing
        let fallback = translations['en'];
        for (const fk of keys) {
          fallback = fallback ? fallback[fk] : null;
        }
        return fallback || keyPath;
      }
    }
    return result;
  };

  const addToCompare = (id) => {
    if (!comparedIds.includes(id) && comparedIds.length < 3) {
      setComparedIds([...comparedIds, id]);
    }
  };

  const removeFromCompare = (id) => {
    setComparedIds(comparedIds.filter((item) => item !== id));
  };

  const clearCompare = () => {
    setComparedIds([]);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
        comparedIds,
        setComparedIds,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
