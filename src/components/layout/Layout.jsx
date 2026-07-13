import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFab from "../ui/WhatsAppFab";
import ScrollToTopButton from "../ui/ScrollToTopButton";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppFab />
    </div>
  );
}
