import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LinksPage from "./components/LinksPage";
import NotFound from "./components/NotFound";

import "./App.css";

export default function App() {
  return (
    <Router>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <SignedIn>
              <HomePage />
            </SignedIn>
          }
        />
        <Route
          path="/links"
          element={
            <SignedIn>
              <LinksPage />
            </SignedIn>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
