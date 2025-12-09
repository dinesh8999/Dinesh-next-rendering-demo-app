// app/dynamic/page.js
export const dynamic = "force-dynamic";

let counter = 0;

export default async function DynamicPage() {
  counter++; // increases with each request
  const serverTime = new Date().toISOString();

  console.log("Dynamic page rendered at", serverTime, "counter:", counter);

  return (
    <main style={{ padding: 24 }}>
      <h1>Dynamic — SSR</h1>
      <p>This page renders on every request (SSR).</p>

      <div>
        <strong>Server time:</strong>
        <pre>{serverTime}</pre>
      </div>

      <div>
        <strong>Request counter:</strong>
        <pre>{counter}</pre>
      </div>

      <small>Refresh to see counter increase.</small>
    </main>
  );
}