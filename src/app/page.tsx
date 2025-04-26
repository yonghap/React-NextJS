import Header from "@/components/navigation";
import Footer from "@/components/footer";
import MainInfo from "@/components/main-info";

export default async function Home() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <MainInfo></MainInfo>
        </div>
        <Footer />
      </div>
    </div>
  );
}
