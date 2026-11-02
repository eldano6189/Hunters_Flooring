import Layout from "./layout/layout";
import { Home } from "./pages/home/home";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
