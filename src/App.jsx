import Hero from './Hero';
import LoginSignup from './LoginSignup'; // Make sure this path is correct

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