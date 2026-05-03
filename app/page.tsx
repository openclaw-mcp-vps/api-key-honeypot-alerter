export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect when your{" "}
          <span className="text-[#58a6ff]">API keys are compromised</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Plant honeypot API keys across your infrastructure. The moment an attacker uses one,
          you get an instant alert via email, Slack, or webhook — with breach location and timing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🪤", title: "Honeypot Keys", desc: "Generate fake-but-realistic API keys for AWS, Stripe, GitHub, and more." },
            { icon: "⚡", title: "Instant Alerts", desc: "Get notified in seconds via email, Slack, or your own webhook endpoint." },
            { icon: "🌍", title: "Breach Details", desc: "See the IP, geolocation, timestamp, and request context of every trigger." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6 text-sm">Everything you need to stay protected</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited honeypot keys",
              "AWS, Stripe, GitHub, Twilio & more",
              "Email + Slack + webhook alerts",
              "Breach geolocation & IP details",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do honeypot API keys work?",
              a: "We generate realistic-looking but non-functional API keys. If an attacker steals and tries to use them, our monitoring infrastructure catches the attempt and alerts you immediately."
            },
            {
              q: "Which services are supported?",
              a: "We support AWS, Stripe, GitHub, Twilio, SendGrid, and more. New integrations are added regularly based on user requests."
            },
            {
              q: "How fast are the alerts?",
              a: "Alerts are triggered in under 5 seconds of a honeypot key being used. You'll receive an email, Slack message, or webhook call with full breach details."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Key Honeypot Alerter. All rights reserved.
      </footer>
    </main>
  );
}
