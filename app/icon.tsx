import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0c0a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #ffcf40",
        }}
      >
        <span
          style={{
            color: "#ffcf40",
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "monospace",
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          M
        </span>
      </div>
    ),
    { ...size },
  );
}
