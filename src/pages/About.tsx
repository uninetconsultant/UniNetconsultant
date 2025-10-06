import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollFadeIn, ScrollSlideIn, ScrollScaleIn } from "@/components/ScrollAnimations";
import { Link } from "react-router-dom";
import { Target, Users, Award, Zap, Heart, Globe, TrendingUp, Shield } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";
import supportTeam from "@/assets/support-team.jpg";
import networkInfra from "@/assets/network-infrastructure.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide reliable, high-speed internet connectivity that empowers communities and businesses to thrive in the digital age.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' needs, offering personalized solutions and exceptional support every step of the way.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service with 99.9% uptime and industry-leading performance.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously investing in cutting-edge technology to provide the fastest and most reliable internet solutions.",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to transform how communities connect to the internet.",
    },
    {
      year: "2016",
      title: "10,000 Customers",
      description: "Reached our first major milestone, serving over 10,000 happy customers.",
    },
    {
      year: "2018",
      title: "Network Expansion",
      description: "Expanded our fiber network coverage by 300%, reaching more communities.",
    },
    {
      year: "2020",
      title: "99.9% Uptime Achieved",
      description: "Implemented redundant systems achieving industry-leading reliability.",
    },
    {
      year: "2023",
      title: "25,000+ Customers",
      description: "Became the trusted choice for over 25,000 homes and businesses.",
    },
    {
      year: "2025",
      title: "Future Ready",
      description: "Investing in next-gen technology to bring even faster speeds to our customers.",
    },
  ];

  const leadership = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      description: "20+ years of experience in telecommunications and network infrastructure.",
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      description: "Expert in fiber-optic technology and network architecture.",
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      description: "Passionate about delivering exceptional customer experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Uninet Consultant</h1>
            <p className="text-xl text-primary-foreground/90">
              Building stronger communities through trusted internet solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollSlideIn>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded with a vision to transform how communities connect, Uninet Consultant has been at the forefront of providing exceptional internet services since our inception. We recognized the growing need for reliable, high-speed connectivity in both residential and business sectors.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  What started as a local initiative has grown into a trusted network serving over 25,000 customers. Our commitment to excellence and customer satisfaction has remained unchanged throughout our journey.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Today, we continue to invest in cutting-edge infrastructure and technology to ensure our customers have access to the best internet solutions available.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Join Our Journey</Link>
                </Button>
              </div>
            </ScrollSlideIn>
            <ScrollScaleIn delay={200}>
              <img 
                src={teamImage} 
                alt="Our team" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollScaleIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollScaleIn key={index} delay={index * 100}>
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A decade of growth, innovation, and commitment to our customers.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <ScrollSlideIn key={index} delay={index * 100}>
                  <div className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                    </div>
                    <Card className="flex-1 p-6 hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </ScrollSlideIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering the best internet experience.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <ScrollScaleIn key={index} delay={index * 150}>
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </Card>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollScaleIn>
              <img 
                src={networkInfra} 
                alt="Network infrastructure" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollScaleIn>
            <ScrollFadeIn delay={200}>
              <div>
                <h2 className="text-4xl font-bold mb-6">World-Class Infrastructure</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our state-of-the-art network is built on 100% fiber-optic technology, ensuring the fastest and most reliable connections. We continuously invest in infrastructure upgrades to stay ahead of tomorrow&apos;s demands.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-secondary rounded-xl hover:scale-105 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Network Nodes</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">10 Gbps</div>
                    <div className="text-sm text-muted-foreground">Backbone Speed</div>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link to="/services">Explore Our Technology</Link>
                </Button>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">By The Numbers</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Our commitment to excellence reflected in measurable results.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Service", icon: Award },
              { number: "25,000+", label: "Happy Customers", icon: Heart },
              { number: "99.9%", label: "Network Uptime", icon: Shield },
              { number: "24/7", label: "Support Available", icon: Users },
            ].map((stat, index) => (
              <ScrollScaleIn key={index} delay={index * 100}>
                <div className="text-center p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl hover:scale-105 hover:bg-primary-foreground/20 transition-all duration-300">
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              </ScrollScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn>
              <div>
                <h2 className="text-4xl font-bold mb-6">Committed to Our Community</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in giving back to the communities we serve. From sponsoring local events to supporting digital literacy programs, we&apos;re invested in making our neighborhoods better places to live and work.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Supporting local schools and libraries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Sponsoring community events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span>Digital literacy training programs</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Involved</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+18883198856">Call: (888) 319-8856</a>
                  </Button>
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollScaleIn delay={200}>
              <img 
                src={supportTeam} 
                alt="Community support" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollScaleIn>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
