import Header from "../component/group/header/index";
import CardSection from "../component/group/cardsection/index";
import "./page.css";
import HeaderDesc from "../component/single/headerdesc";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderDesc />
      <CardSection />
      <section className="article-section"></section>
      <footer className="footer"></footer>
    </main>
  );
}
