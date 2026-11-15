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
          background: "#f4f7fb",
          color: "#15233b",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", letterSpacing: 6, color: "#1f5fbf", fontSize: 24 }}>SHIRT STUDIO</div>
        <div style={{ display: "flex", fontSize: 108, lineHeight: 0.9 }}>
          Halyard
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#3d5a80" }}>Navy, blue, sky, and white.</div>
      </div>
    ),
    size,
  );
}
