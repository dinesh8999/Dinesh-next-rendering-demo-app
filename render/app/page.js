// app/page.js
export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Next.js Data Fetching Demo</h1>
      <p>
        Open <a href="/static">/static</a>, <a href="/dynamic">/dynamic</a>, and{' '}
        <a href="/hybrid">/hybrid</a>.
      </p>
    </main>
  );
}