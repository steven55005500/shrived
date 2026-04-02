import React from 'react';

const Terms = () => {
  return (
    <section className="py-20 px-4 bg-[#f4f7fb] min-h-screen">
      <div className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100">
        <div className="space-y-8 text-gray-600 text-sm md:text-base leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">1. Service Agreement</h2>
            <p>By engaging SHRIVEDH's services, you agree to these terms and conditions. All projects are subject to scope definition, timeline agreement, and payment terms outlined in the project proposal.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">2. Project Scope and Changes</h2>
            <p>Project scope is defined in the initial agreement. Any changes or additions to the scope will be documented and may result in additional costs and timeline adjustments.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">3. Payment Terms</h2>
            <p>Payment schedules are outlined in project proposals. Typically, 50% upfront payment is required to commence work, with the balance due upon project completion. Late payments may incur additional fees.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">4. Intellectual Property Rights</h2>
            <p>Upon full payment, clients receive ownership of deliverables. We retain the right to showcase the work in our portfolio. Pre-existing intellectual property and third-party licenses remain with their respective owners.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">5. Confidentiality</h2>
            <p>We treat all client information as confidential and will not share with third parties without explicit consent. Both parties agree to maintain confidentiality of proprietary information.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">6. Project Timeline and Delays</h2>
            <p>We strive to meet agreed timelines. However, delays caused by client feedback, content provision, or unforeseen circumstances may extend project duration without penalty.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">7. Warranties and Support</h2>
            <p>We provide a 30-day warranty for bug fixes post-launch. Extended support and maintenance packages are available separately. We do not guarantee compatibility with future third-party updates.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">8. Limitation of Liability</h2>
            <p>SHRIVEDH's liability is limited to the total project cost. We are not liable for indirect, consequential, or incidental damages arising from our services or deliverables.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">9. Termination</h2>
            <p>Either party may terminate the agreement with written notice. Upon termination, client pays for work completed to date. All deliverables and intellectual property remain with SHRIVEDH until full payment.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">10. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Maharashtra.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;