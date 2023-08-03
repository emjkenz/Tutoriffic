import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
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
import Quiz from "./pages/Quiz";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import { isLoggedIn } from "./utils/auth";
import CalendarView from "./pages/Calendar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("id_token");
    setLoggedIn(Boolean(token));
  }, []);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Homepage />} />;
            <Route path="/Dashboard" element={<ProtectedRoute />}>
              <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/Quiz/:id" element={<ProtectedRoute />}>
              <Route path="/Quiz/:id" element={<Quiz />} />
            </Route>
            <Route path="/Calendar" element={<ProtectedRoute />}>
              <Route path="/Calendar" element={<CalendarView />} />
            </Route>
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
