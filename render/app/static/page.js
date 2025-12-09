// app/static/page.js
export const revalidate = false; // fully static (SSG)

export default function StaticPage() {
  // In a real build this runs at build time; in dev it may re-run often
  const builtAt = new Date().toISOString();
  console.log("Static page built at", builtAt);

  return (
    <main style={{ padding: 24 }}>
      <h1>Static — SSG</h1>
      <p>This page is generated at build time (revalidate = false).</p>
      <div>
        <strong>Built at (server/build time):</strong>
        <pre>{builtAt}</pre>
      </div>
      <small>Note: true build-time behaviour is best verified on a production deploy.</small>
    </main>
  );
}