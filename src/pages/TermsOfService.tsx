import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  const lastUpdated = "October 4, 2025";

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-foreground/90">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-sm text-muted-foreground mb-8">
                  Last updated: {lastUpdated}
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Uninet Consultant services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not agree 
                  with any of these terms, you are prohibited from using our services.
                </p>

                <h2>2. Service Description</h2>
                <p>
                  Uninet Consultant provides internet connectivity services, network consulting, 
                  and related technical support. We reserve the right to modify, suspend, or 
                  discontinue any aspect of our services at any time.
                </p>

                <h2>3. Account Registration and Security</h2>
                <ul>
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You agree to notify us immediately of any unauthorized access to your account</li>
                  <li>You must be at least 18 years old to enter into this agreement</li>
                </ul>

                <h2>4. Acceptable Use Policy</h2>
                <p>You agree not to use our services to:</p>
                <ul>
                  <li>Engage in illegal activities or violate any applicable laws</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Interfere with or disrupt our network or services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use excessive bandwidth that affects other users</li>
                  <li>Operate servers or commercial activities without prior approval</li>
                </ul>

                <h2>5. Service Availability and Performance</h2>
                <ul>
                  <li>We strive to provide 99.9% network uptime but cannot guarantee uninterrupted service</li>
                  <li>Service may be temporarily unavailable due to maintenance, upgrades, or unforeseen circumstances</li>
                  <li>Internet speeds may vary based on network conditions and usage patterns</li>
                  <li>We reserve the right to manage network traffic to ensure optimal performance for all users</li>
                </ul>

                <h2>6. Billing and Payment</h2>
                <ul>
                  <li>Service fees are billed monthly in advance unless otherwise specified</li>
                  <li>Payment is due by the date specified on your invoice</li>
                  <li>Late payments may result in service suspension or termination</li>
                  <li>All fees are non-refundable except as specified in our Refund Policy</li>
                  <li>You authorize us to charge your designated payment method automatically</li>
                </ul>

                <h2>7. Equipment and Installation</h2>
                <ul>
                  <li>Equipment provided by Uninet Consultant remains our property</li>
                  <li>You are responsible for the care and return of our equipment</li>
                  <li>Installation and setup services are subject to scheduling and availability</li>
                  <li>You may be charged for damaged or unreturned equipment</li>
                </ul>

                <h2>8. Service Termination</h2>
                <p>Either party may terminate service with 30 days written notice. We may immediately terminate or suspend service if you:</p>
                <ul>
                  <li>Violate these Terms of Service</li>
                  <li>Fail to pay fees when due</li>
                  <li>Engage in activities that harm our network or other users</li>
                  <li>Provide false or misleading information</li>
                </ul>

                <h2>9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Uninet Consultant shall not be liable 
                  for any indirect, incidental, special, or consequential damages arising from 
                  the use of our services. Our total liability shall not exceed the amount 
                  paid for services in the preceding 12 months.
                </p>

                <h2>10. Privacy and Data Protection</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information.
                </p>

                <h2>11. Dispute Resolution</h2>
                <p>
                  Any disputes arising from these terms or our services shall be resolved through 
                  binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>

                <h2>12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will 
                  be effective upon posting to our website. Continued use of our services after 
                  changes are posted constitutes acceptance of the new terms.
                </p>

                <h2>13. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul>
                  <li>Email: legal@uninetconsultant.com</li>
                  <li>Phone: (888) 319-8856</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default TermsOfService;