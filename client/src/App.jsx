import React, { Component } from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Carousel from "./components/Carousel";
import Options from "./components/Options";
import Footer from "./components/Footer";
import RecommendList from "./components/recommend";
import Login from "./components/Login";
import "./App.css";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="header-container">
          <Header />
          <Login />
        </div>
        <Details />
        <Carousel />
        <Options />
        <RecommendList />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
