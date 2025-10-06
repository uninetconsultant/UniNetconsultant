import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const lastUpdated = "October 4, 2025";

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-foreground/90">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-sm text-muted-foreground mb-8">
                  Last updated: {lastUpdated}
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  request our services, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Billing and payment information</li>
                  <li>Service usage data and preferences</li>
                  <li>Communication records and support requests</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our internet services</li>
                  <li>Process payments and manage your account</li>
                  <li>Communicate with you about services, updates, and support</li>
                  <li>Ensure network security and prevent fraud</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>

                <h2>3. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who assist in delivering our services</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>

                <h2>5. Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>File a complaint with relevant data protection authorities</li>
                </ul>

                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. You can control cookie preferences 
                  through your browser settings.
                </p>

                <h2>7. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect 
                  personal information from children under 13. If we learn we have collected such 
                  information, we will delete it promptly.
                </p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and updating the 
                  "Last updated" date.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul>
                  <li>Email: privacy@uninetconsultant.com</li>
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

export default PrivacyPolicy;