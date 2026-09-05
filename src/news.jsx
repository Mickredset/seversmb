// news.jsx
import newsData from "./data/news.json";

function NewsSection() {
  const news = newsData;

  return (
    <section className="section">
      <h2 className="section-title">Новости</h2>

      <div className="news-grid">
        {news.map((item) => (
          <article className="card news-card" key={item.id}>
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            
            {/* Перебираем массив строк из JSON */}
            {item.text.map((paragraph, index) => (
              <p key={index} className="news-paragraph">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
