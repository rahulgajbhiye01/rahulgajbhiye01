import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rahul Gajbhiye — DevOps engineer and writer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 64,
        background: "linear-gradient(135deg, #020202 0%, #0f172a 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, color: "#34d399", marginBottom: 16 }}>
        Rahul Gajbhiye
      </div>
      <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
        DevOps engineer and writer
      </div>
      <div style={{ fontSize: 28, marginTop: 24, color: "#cbd5e1" }}>
        Systems, product thinking, and practical engineering notes
      </div>
    </div>,
    {
      ...size,
    },
  );
}
