import { ImageResponse } from "next/og";

export const alt = "Rahul Gajbhiye — a living archive";
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
        padding: 80,
        background: "#faf7f5",
        color: "#191715",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
      >
        Rahul Gajbhiye
      </div>
      <div
        style={{
          fontSize: 28,
          marginTop: 28,
          color: "#6a645e",
          fontFamily: "sans-serif",
        }}
      >
        A living archive.
      </div>
    </div>,
    {
      ...size,
    },
  );
}
