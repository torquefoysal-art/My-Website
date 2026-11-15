import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07080c",
          color: "#f4f6f8",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", letterSpacing: 6, color: "#e10600", fontSize: 24 }}>RACE JERSEYS</div>
        <div style={{ display: "flex", fontSize: 108, lineHeight: 0.9 }}>
          Halyard
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#9aa3b2" }}>Eight numbers. One dark garage.</div>
      </div>
    ),
    size,
  );
}
