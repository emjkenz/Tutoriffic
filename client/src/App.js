import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Nav";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Assignments from "./pages/Assignments";
import Footer from "./components/Footer";
import Maths from "./pages/Maths";
import English from "./pages/English";
import Sciences from "./pages/Sciences";
import Arts from "./pages/Arts";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Homepage />} />;
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Maths" element={<Maths />} />
            <Route path="/English" element={<English />} />
            <Route path="/Sciences" element={<Sciences />} />
            <Route path="/Arts" element={<Arts />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
