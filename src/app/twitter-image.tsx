import { ImageResponse } from "next/og";

export const alt = "Rahul Gajbhiye";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #10b981 0%, #020202 100%)",
        color: "white",
        fontFamily: "sans-serif",
        padding: 64,
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700, textAlign: "center" }}>
        Rahul Gajbhiye
      </div>
    </div>,
    {
      ...size,
    },
  );
}
