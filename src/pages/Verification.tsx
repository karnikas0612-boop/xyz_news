import { X } from "lucide-react";
import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const steps = [
    {
        title: "Source Received",
        description:
            "Video arrives from field reporters, eyewitnesses or partner agencies."
    },
    {
        title: "Location Verified",
        description:
            "Location is verified by experts."
    },
    {
        title: "Metadata Analysis",
        description:
            "Timestamps, device information and file integrity are checked."
    },
    {
        title: "Editorial Review",
        description:
            "The newsroom reviews the evidence and supporting reports."
    },
    {
        title: "Client Distribution",
        description:
            "Approved content is released to clients."
    }
];
const Verification = () => {
    const [showReview, setShowReview] = useState(false);
    return (
        <div className="min-h-screen bg-paper text-ink">
            <Header/>
            <section className="relative border-b border-border">
                <div className="container py-24">

                    <span className="text-accent uppercase tracking-[0.3em] text-xs">
                        — Verification Desk
                    </span>

                    <h1 className="mt-4 text-6xl font-display font-bold">
                        Trust Before
                        <br />
                        Distribution.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                        Every video, image and eyewitness report is reviewed by our
                        verification team before it reaches clients. We verify
                        sources, locations, timestamps and authenticity to ensure
                        accurate reporting.
                    </p>

                </div>

            </section>
            <section className="container py-24">
                <h2 className="text-4xl font-display font-bold mb-16">
                    How We Verify
                </h2>

                <div className="max-w-3xl">

                    {steps.map((step, index) => (
                        <div key={step.title} className="flex gap-6">

                            {/* Timeline column */}
                            <div className="flex flex-col items-center">
                                <div className="h-5 w-5 rounded-full bg-accent" />

                                {index !== steps.length - 1 && (
                                    <div className="w-px flex-1 bg-border min-h-[80px]" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="pb-12">
                                <h3 className="text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
            <section className="container py-24 space-y-12">

  {/* Case Study 1 */}
  <div className="border border-border p-10">
    <span className="text-accent uppercase text-xs tracking-[0.3em]">
      Case Study 01
    </span>

    <h2 className="mt-4 text-4xl font-display font-bold">
      Jaipur Protest Footage
    </h2>

    <div className="mt-10 grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="font-bold text-xl">Claim</h3>
        <p className="mt-3 text-muted-foreground">
          Footage allegedly showing student protests outside a university campus.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl">Verification Results</h3>
        <ul className="mt-4 space-y-3">
          <li>✓ Location confirmed</li>
          <li>✓ Timestamp verified</li>
          <li>✓ Cross-checked with reporters</li>
          <li>✓ Approved for distribution</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Case Study 2 */}
  <div className="border border-border p-10">
    <span className="text-accent uppercase text-xs tracking-[0.3em]">
      Case Study 02
    </span>

    <h2 className="mt-4 text-4xl font-display font-bold">
      Bridge Collapse
    </h2>

    <div className="mt-10 grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="font-bold text-xl">Claim</h3>
        <p className="mt-3 text-muted-foreground">
          Major bridge collapsed due to flooding.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl">Verification Results</h3>
        <ul className="mt-4 space-y-3">
          <li>✓ Location confirmed</li>
          <li>✗ Claim found misleading</li>
          <li>✓ Video was from a previous year</li>
          <li>✓ Flagged before publication</li>
        </ul>
      </div>
    </div>
  </div>

</section>
            <section className="bg-black text-white py-24 mt-24">
                <div className="container">

                    <h2 className="text-5xl font-display font-bold">
                        Need Verification?
                    </h2>

                    <p className="mt-2 text-white/70 max-w-xl">
                        Submit footage, images or eyewitness reports
                        to our verification desk.
                    </p>

                    <button onClick={() => setShowReview(true)} className="mt-8 px-8 py-4 bg-accent rounded-full font-bold">
                        Submit For Review
                    </button>
                    {showReview && (
                        <div
                            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                            onClick={() => setShowReview(false)}
                        >
                            <div
                                className="bg-paper text-ink p-6 rounded-xl w-[90%] max-w-md relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setShowReview(false)}
                                    className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center rounded-full hover:bg-black/5 transition"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                <h2 className="text-3xl font-display font-bold">
                                    Submit your footage
                                </h2>

                                <p className="mt-2 text-muted-foreground">
                                    Get it verified within few minutes.
                                </p>

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="mt-6 w-full border p-3 rounded"
                                />

                                <input
                                    type="file"
                                    placeholder="Add Your File"
                                    className="mt-4 w-full border p-3 rounded"
                                />

                                <button
                                    className="mt-6 w-full bg-accent text-white py-3 rounded font-bold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default Verification;
