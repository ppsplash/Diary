import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
