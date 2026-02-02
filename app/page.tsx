import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section>
        <Header />
      </section>
      <main>
        <div>Hi there</div>
      </main>
      <section className='last:mt-auto'>
        <Footer />
      </section>
    </div>
  );
}
