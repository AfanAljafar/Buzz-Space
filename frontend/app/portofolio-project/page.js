import Header from "../../component/group/header";
import Card from "../../component/single/card";
import "./portofolio-project.css";
import Link from "next/link";

export default function PortofolioProject() {
  return (
    <main>
      <Header />
      <div className="bg-pp">
        <Link className="tc" href={"/portofolio-project/temperature-converter"}>
          <Card children={"Temperature Converter"} />
        </Link>
        <Card className="b" children={"lorem ipsum"} />
        <Card className="b" children={"lorem ipsum"} />
      </div>
    </main>
  );
}
