import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "IME FTUI 2026 - Ikatan Mahasiswa Elektro";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #000722 0%, #0a1628 50%, #000722 100%)",
          position: "relative",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(36, 99, 235, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              background: "linear-gradient(135deg, #2463EB 0%, #60a5fa 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
              letterSpacing: "-2px",
            }}
          >
            IME FTUI
          </div>

          {/* Year badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #2463EB 0%, #1d4ed8 100%)",
              borderRadius: "40px",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "white",
              }}
            >
              2026
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
            }}
          >
            Ikatan Mahasiswa Elektro
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255, 255, 255, 0.6)",
              marginTop: "10px",
            }}
          >
            Fakultas Teknik Universitas Indonesia
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          imeftui.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
