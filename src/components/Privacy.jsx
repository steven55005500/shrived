import React from 'react';

const Privacy = () => {
  return (
    <section className="py-20 px-4 bg-[#f4f7fb] min-h-screen">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100">
        <div className="space-y-8 text-gray-600 text-sm md:text-base leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, including name, email, phone number, company details, and project requirements when you contact us or request services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">2. How We Use Your Information</h2>
            <p>We use your information to respond to inquiries, provide services, process payments, improve our offerings, and send important updates about your projects and relevant services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">3. Data Security Measures</h2>
            <p>We implement industry-standard security measures to protect your information. All data is encrypted during transmission and stored securely using advanced security protocols.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">4. Third-Party Disclosure</h2>
            <p>We do not sell or trade your personal information. We may share data with trusted partners who assist in operating our website or conducting our business, subject to strict confidentiality agreements.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">5. Cookies and Tracking Technologies</h2>
            <p>We use cookies to enhance your browsing experience, remember preferences, and analyze site traffic. You can choose to disable cookies in your browser settings, though this may affect functionality.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">6. Communication Preferences</h2>
            <p>By providing your contact information, you agree to receive project updates and promotional communications via email, SMS, and other channels. You can opt-out at any time.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill services, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">8. Your Rights and Choices</h2>
            <p>You have the right to access, correct, update, or delete your personal information. Contact us at <strong>contact@shrivedh.com</strong> to exercise these rights or for any privacy-related inquiries.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">9. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children without parental consent.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">10. Policy Updates</h2>
            <p>We may update this privacy policy periodically to reflect changes in our practices. Any changes will be posted on this page with an updated revision date.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;