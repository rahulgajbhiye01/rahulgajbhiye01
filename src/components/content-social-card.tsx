export function ContentSocialCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
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
      <div style={{ fontSize: 24, color: "#6a645e", marginBottom: 24 }}>
        Rahul Gajbhiye
      </div>
      <div style={{ fontSize: 62, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
        {title}
      </div>
      <div
        style={{
          fontSize: 26,
          lineHeight: 1.35,
          marginTop: 24,
          color: "#6a645e",
          fontFamily: "sans-serif",
        }}
      >
        {description}
      </div>
    </div>
  );
}
