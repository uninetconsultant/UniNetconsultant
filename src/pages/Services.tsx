import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Wifi, 
  TrendingUp, 
  Users, 
  Settings, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Home Fiber Internet",
      description: "High-speed fiber connectivity designed for modern homes and families.",
      features: [
        "Ultra-fast download speeds up to 1 Gbps",
        "Unlimited data with no caps",
        "Perfect for streaming, gaming, and remote work",
        "Free professional installation",
        "24/7 customer support",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Fiber Plans",
      description: "Scalable, high-capacity internet with dedicated support for businesses.",
      features: [
        "Symmetrical upload and download speeds",
        "Dedicated business support team",
        "99.9% uptime SLA guarantee",
        "Scalable bandwidth options",
        "Custom enterprise solutions",
      ],
    },
    {
      icon: Settings,
      title: "Smart Wi-Fi Setup",
      description: "Professional network configuration and optimization services.",
      features: [
        "Complete home/office network setup",
        "Wi-Fi coverage optimization",
        "Security configuration and firewall",
        "Multiple device management",
        "Ongoing maintenance support",
      ],
    },
    {
      icon: Users,
      title: "Network Consulting",
      description: "Expert guidance and strategic planning for your infrastructure.",
      features: [
        "Network design and planning",
        "Performance optimization",
        "Security assessment and auditing",
        "Technology recommendations",
        "Implementation support",
      ],
    },
    {
      icon: Shield,
      title: "Managed Security",
      description: "Comprehensive security solutions to protect your network.",
      features: [
        "Advanced firewall protection",
        "Real-time threat monitoring",
        "DDoS protection",
        "VPN setup and management",
        "Regular security updates",
      ],
    },
    {
      icon: Zap,
      title: "Technical Support",
      description: "Round-the-clock expert assistance whenever you need it.",
      features: [
        "24/7 phone and chat support",
        "Remote troubleshooting",
        "On-site service available",
        "Proactive network monitoring",
        "Fast response times",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive internet and network solutions tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="link" className="p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to design a tailored solution that perfectly fits your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+18883198856">Call Now: (888) 319-8856</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
