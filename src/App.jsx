import Hero from './Hero';
import LoginSignup from './LoginSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
