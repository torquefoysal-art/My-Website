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
          background: "#090807",
          color: "#f3ecdf",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", color: "#c6a36a", fontSize: 28, letterSpacing: 6 }}>
          WEB DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 108, lineHeight: 0.9 }}>
          <span>Foysal</span>
          <span style={{ color: "#c6a36a" }}>Islam</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b7ad9e" }}>
          Interfaces, type, and three-dimensional web.
        </div>
      </div>
    ),
    size,
  );
}
