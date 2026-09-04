// news.jsx
import newsData from "./data/news.json";

function NewsSection() {
  const news = newsData

  return (
    <section className="section">
      <h2 className="section-title">Новости</h2>

      <div className="news-grid">
        {news.map((item) => (
          <article className="card news-card" key={item.id}>
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// Экспортируем компонент, чтобы его можно было использовать в других файлах
export default NewsSection;