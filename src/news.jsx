// news.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import newsData from "./data/news.json";

function NewsSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [copied, setCopied] = useState(false);
  
  const news = newsData;

  // Синхронизируем состояние с URL
  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (searchQuery !== currentSearch) {
      setSearchQuery(currentSearch);
    }
  }, [searchParams]);

  // Обновляем URL при изменении поиска
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    
    if (value.trim()) {
      setSearchParams({ search: value }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  // Фильтруем новости по поисковому запросу
  const filteredNews = news.filter((item) => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(query);
    const textMatch = item.text.join(" ").toLowerCase().includes(query);
    const dateMatch = item.date.toLowerCase().includes(query);
    
    return titleMatch || textMatch || dateMatch;
  });

  // Копируем URL с %s для добавления как поисковой системы
  const copySearchEngineUrl = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const searchEngineUrl = `${baseUrl}?search=%s`;
    
    navigator.clipboard.writeText(searchEngineUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="section">
      <h2 className="section-title">Новости</h2>

      {/* Поле поиска */}
      <div className="news-search">
        <input
          type="text"
          placeholder="Поиск по новостям..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="news-search-input"
        />
        
        <button
          type="button"
          onClick={copySearchEngineUrl}
          className="news-search-engine-button"
          title="Скопировать URL для добавления как поисковой системы"
        >
          {copied ? "✓ Скопировано!" : "Скопировать URL с %s"}
        </button>
        
        <div className="news-search-hint">
          Подсказка: добавьте этот сайт как поисковую систему в браузере. 
          Используйте URL: <code>{window.location.origin}{window.location.pathname}?search=%s</code>
        </div>
      </div>

      <div className="news-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <article className="card news-card" key={item.id}>
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              
              {item.text.map((paragraph, index) => (
                <p key={index} className="news-paragraph">
                  {paragraph}
                </p>
              ))}
            </article>
          ))
        ) : (
          <div className="news-empty">
            <p>Ничего не найдено по запросу: "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsSection;