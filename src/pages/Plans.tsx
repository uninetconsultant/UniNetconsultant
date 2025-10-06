import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Basic Plan",
      badge: null,
      price: "$29",
      period: "/month",
      description: "Ideal for browsing & casual streaming",
      features: [
        "Up to 100 Mbps download speed",
        "Unlimited data",
        "Free modem rental",
        "Email support",
        "Basic security features",
        "1 device optimization",
      ],
      popular: false,
    },
    {
      name: "Primary Plan",
      badge: "Popular",
      price: "$49",
      period: "/month",
      description: "Perfect for households and remote workers",
      features: [
        "Up to 500 Mbps download speed",
        "Unlimited data",
        "Free modem & router rental",
        "24/7 priority support",
        "Advanced security suite",
        "Up to 5 device optimization",
        "Free professional installation",
      ],
      popular: true,
    },
    {
      name: "Dominant Plan",
      badge: null,
      price: "$79",
      period: "/month",
      description: "For power users, streaming, and smart homes",
      features: [
        "Up to 1 Gbps download speed",
        "Unlimited data",
        "Premium modem & router",
        "24/7 VIP support",
        "Premium security & VPN",
        "Unlimited device optimization",
        "Free professional installation",
        "Network performance monitoring",
        "Dedicated support manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple Pricing, Powerful Internet</h1>
            <p className="text-xl text-primary-foreground/90">
              Choose a plan that works best for you. Whether you're casually streaming, or running a smart home, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative hover:shadow-2xl transition-all duration-300 animate-fade-in-up ${
                  plan.popular ? 'ring-2 ring-primary scale-105 md:scale-110' : 'hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-accent">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button 
                    asChild 
                    variant={plan.popular ? "hero" : "default"}
                    size="lg" 
                    className="w-full"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    size="lg" 
                    className="w-full"
                  >
                    <a href="tel:+18883198856">Call Now: (888) 319-8856</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Plans Include</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every plan comes with these essential features at no extra cost.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "No Contracts",
                description: "Month-to-month flexibility with no long-term commitments required",
              },
              {
                title: "99.9% Uptime",
                description: "Industry-leading reliability with our SLA guarantee",
              },
              {
                title: "Free Installation",
                description: "Professional setup at no additional cost for all plans",
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at your next billing cycle.",
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No setup fees! Professional installation is included free with all plans.",
                },
                {
                  question: "What if I'm not satisfied?",
                  answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your first month.",
                },
                {
                  question: "Do you offer business plans?",
                  answer: "Yes! We have specialized business plans with dedicated support and custom solutions. Contact us for more information.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Plans;
