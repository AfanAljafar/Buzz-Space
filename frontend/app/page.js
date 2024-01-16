import Header from "../component/group/header/index";
import CardSection from "../component/group/cardsection/index";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Header />
      <CardSection />
      <section className="article-section"></section>
      <footer className="footer"></footer>
    </main>
  );
}
