export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 4 }}>Tenzin Jinpa</h1>
        <p style={{ fontWeight: 700, margin: "4px 0" }}>AI/ML & Software R&D Lead</p>
        <p style={{ color: "#a9abb3", margin: "4px 0 16px" }}>Strategic innovation leader bridging research and commercialization.</p>
        <p style={{ color: "#a9abb3" }}>
          <a href="mailto:tenzinjinpa2024@gmail.com">tenzinjinpa2024@gmail.com</a> · <a href="https://ca.linkedin.com/in/tenzin-jinpa-6a858979" target="_blank">LinkedIn</a> · <a href="https://github.com/tenzin-jinpa" target="_blank">GitHub</a> · Toronto, Canada
        </p>
      </header>

      <section>
        <h2>About</h2>
        <p>Strategic Research & Innovation Leader in AI and Software with a track record of advancing innovation, securing government funding (IRAP, MITACS, NSERC, TAC), and mentoring cross‑functional teams to deliver commercially successful solutions for 30+ SMEs.</p>
      </section>

      <section>
        <h2>Highlights</h2>
        <ul>
          <li>Led 30+ AI & software projects from concept to commercialization.</li>
          <li>Architected cloud-native solutions on Azure & AWS; integrated CI/CD.</li>
          <li>Published AAAI research on code representation learning (UBC).</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>AI/ML: LLMs, NLP, Deep Learning, Generative AI</li>
          <li>Cloud: Azure, AWS</li>
          <li>Frameworks: PyTorch, TensorFlow, scikit-learn</li>
          <li>DevOps: MLOps, CI/CD, Azure DevOps, Jenkins</li>
          <li>Languages: Python, Java, C#, C</li>
        </ul>
      </section>

      <section>
        <h2>Selected Projects</h2>
        <ul>
          <li><strong>Burnout Detection for Healthcare (LLMs)</strong>: Built a prototype leveraging industry datasets to detect burnout and generate tailored wellness plans.</li>
          <li><strong>Retail Marketing Effort Estimation</strong>: Predicted setup effort using 1M+ data points; evaluated tree-based models and RNNs.</li>
          <li><strong>Non-Invasive Blood Pressure via ECG</strong>: Led ML model development with &lt;6.5 error; currently in field testing.</li>
        </ul>
      </section>

      <footer style={{ marginTop: 36, color: "#a9abb3" }}>
        © Tenzin Jinpa · Next.js on Vercel
      </footer>
    </main>
  );
}
