import Navbar from "./Navbar";
import Footer from "./Footer";
import Linkedin from "../ui/Linkedin";
import WhatsAppFab from "../ui/WhatsAppFab";
import InstagramFab from "../ui/InstagramFab";
import Tiktok from "../ui/Tiktok"
import ScrollToTopButton from "../ui/ScrollToTopButton";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <Linkedin />
      <Tiktok />
      <InstagramFab />
      <WhatsAppFab />
    </div>
  );
}
