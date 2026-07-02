import './App.css';
import CardHorizontal from './components/CardHorizontal';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app-shell">
        <Header />
        <main>
          <CardHorizontal />
        </main>
        <Footer />
    </div>
  );
}

export default App;
