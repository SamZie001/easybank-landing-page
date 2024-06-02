import {
  Navbar,
  Footer,
  Intro,
  WhyEasybank,
  LatestArticles,
} from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Intro />
      <WhyEasybank />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
