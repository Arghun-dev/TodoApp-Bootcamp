import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
