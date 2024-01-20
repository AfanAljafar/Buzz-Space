import Header from "../component/group/header/index";
import "./page.css";
import Footer from "../component/group/footer";
import NewsPaper from "../component/group/newspaper";

export default function Home() {
  return (
    <main>
      <Header />
      <NewsPaper />
      <Footer />
    </main>
  );
}
