import NavBar from "@/components/Navbar";
import About from "@/components/About";
import Books from "@/components/Books";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <NavBar/>
        <div id="about">
            <About />
        </div>
        <div id="books">
            <Books/>
        </div>
        <div id="footer">
            <Footer/>
        </div>
    </main>
  );
}
