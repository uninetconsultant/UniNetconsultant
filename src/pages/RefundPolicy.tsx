import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card } from "@/components/ui/card";

const RefundPolicy = () => {
  const lastUpdated = "October 4, 2025";

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Refund Policy</h1>
            <p className="text-xl text-primary-foreground/90">
              Understanding our refund and cancellation policies for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-sm text-muted-foreground mb-8">
                  Last updated: {lastUpdated}
                </p>

                <h2>1. General Refund Policy</h2>
                <p>
                  At Uninet Consultant, we strive to provide excellent service and customer satisfaction. 
                  This Refund Policy outlines the circumstances under which refunds may be provided 
                  for our internet services and related products.
                </p>

                <h2>2. Service Satisfaction Guarantee</h2>
                <ul>
                  <li><strong>30-Day Money-Back Guarantee:</strong> New residential customers can cancel their service within 30 days of activation for a full refund of monthly service fees</li>
                  <li><strong>Business Plans:</strong> Business customers have a 14-day evaluation period with full refund eligibility</li>
                  <li>Installation and setup fees are non-refundable after service activation</li>
                  <li>Equipment rental fees are refundable on a prorated basis upon equipment return</li>
                </ul>

                <h2>3. Eligible Refund Situations</h2>
                <p>Refunds may be provided in the following circumstances:</p>
                <ul>
                  <li>Service unavailable due to technical limitations in your area after installation attempt</li>
                  <li>Significant service outages exceeding our SLA commitments</li>
                  <li>Billing errors or duplicate charges</li>
                  <li>Cancellation within the satisfaction guarantee period</li>
                  <li>Prepaid services not yet rendered at the time of cancellation</li>
                </ul>

                <h2>4. Non-Refundable Items</h2>
                <p>The following items are generally non-refundable:</p>
                <ul>
                  <li>Installation and professional setup fees (after service activation)</li>
                  <li>Equipment purchase fees (unless defective under warranty)</li>
                  <li>Service calls and technician visits</li>
                  <li>Early termination fees (if applicable)</li>
                  <li>Third-party services or products</li>
                  <li>Services used beyond the satisfaction guarantee period</li>
                </ul>

                <h2>5. Refund Process and Timeline</h2>
                <ul>
                  <li><strong>Request Method:</strong> Refund requests must be submitted in writing via email, phone, or our customer portal</li>
                  <li><strong>Processing Time:</strong> Approved refunds are processed within 5-10 business days</li>
                  <li><strong>Refund Method:</strong> Refunds are issued to the original payment method used</li>
                  <li><strong>Equipment Return:</strong> Any rented equipment must be returned in good condition within 30 days</li>
                </ul>

                <h2>6. Prorated Refunds</h2>
                <p>
                  For mid-cycle cancellations outside the satisfaction guarantee period, 
                  prorated refunds may be provided for unused portions of prepaid services, 
                  calculated from the effective cancellation date.
                </p>

                <h2>7. Service Level Agreement (SLA) Credits</h2>
                <ul>
                  <li>Business customers may be eligible for service credits if uptime falls below guaranteed levels</li>
                  <li>SLA credits are automatically applied to the next billing cycle</li>
                  <li>Credits do not constitute cash refunds unless specifically requested during cancellation</li>
                </ul>

                <h2>8. Equipment Damage and Replacement</h2>
                <ul>
                  <li>Customers are responsible for damaged or lost equipment</li>
                  <li>Replacement fees will be charged for unreturned or damaged equipment</li>
                  <li>Normal wear and tear is expected and will not result in charges</li>
                  <li>Equipment must be returned in original packaging when possible</li>
                </ul>

                <h2>9. Dispute Resolution</h2>
                <p>
                  If you disagree with a refund decision, you may escalate the matter through our 
                  customer service management team. We are committed to resolving disputes fairly 
                  and promptly.
                </p>

                <h2>10. Exceptions and Special Circumstances</h2>
                <p>
                  Uninet Consultant reserves the right to make exceptions to this policy in cases of 
                  extraordinary circumstances, regulatory requirements, or customer hardship situations. 
                  Each case will be evaluated individually.
                </p>

                <h2>11. Policy Changes</h2>
                <p>
                  This Refund Policy may be updated from time to time. Changes will be posted on 
                  our website and will apply to services ordered after the effective date of the change.
                </p>

                <h2>12. Contact Us for Refunds</h2>
                <p>
                  To request a refund or discuss your specific situation, please contact us:
                </p>
                <ul>
                  <li>Email: billing@uninetconsultant.com</li>
                  <li>Phone: (888) 319-8856</li>
                  <li>Customer Portal: Log in to your account and submit a support ticket</li>
                </ul>

                <p className="mt-8 p-4 bg-secondary rounded-lg">
                  <strong>Note:</strong> This policy applies to services provided directly by Uninet Consultant. 
                  Third-party services or products may have different refund policies as specified 
                  by their respective providers.
                </p>
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

export default RefundPolicy;