import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>ORCEA WEBSITE WORKING</h1>
    </div>
  );
}