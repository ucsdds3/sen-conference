import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
