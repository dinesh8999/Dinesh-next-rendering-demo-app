// app/hybrid/page.js
export const revalidate = 30; // page will regenerate every 30 seconds

let regenCounter = 0; // increases only when ISR regenerates the page

export default function HybridPage() {
  regenCounter++;
  const generatedAt = new Date().toISOString();

  console.log("Hybrid page generated at", generatedAt, "regenCounter:", regenCounter);

  return (
    <main style={{ padding: 24 }}>
      <h1>Hybrid — ISR</h1>
      <p>This page uses Incremental Static Regeneration (ISR).</p>

      <div>
        <strong>Generated at:</strong>
        <pre>{generatedAt}</pre>
      </div>

      <div>
        <strong>ISR regeneration counter:</strong>
        <pre>{regenCounter}</pre>
      </div>

      <small>
        Refresh after 30 seconds to see regeneration.
      </small>
    </main>
  );
}