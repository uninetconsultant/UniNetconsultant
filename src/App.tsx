import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages with error boundary
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Plans = React.lazy(() => import("./pages/Plans"));
const Contact = React.lazy(() => import("./pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const RefundPolicy = React.lazy(() => import("./pages/RefundPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component
const Loading = () => (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh",
    fontFamily: "Arial, sans-serif"
  }}>
    <div>Loading Uninet Consultant...</div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "20px", 
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          marginTop: "50px"
        }}>
          <h1>Uninet Consultant</h1>
          <h2>Website Loading Issue</h2>
          <p>We're experiencing a temporary issue. Please refresh the page.</p>
          <p>For immediate assistance, call: <strong>(888) 319-8856</strong></p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
