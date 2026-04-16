import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const accent = "#D6E4F0";
const accentLight = "#E8EFF7";
const ink = "#1A1A1A";
const muted = "#7A8FA3";

export async function generateSocialImage() {
  const gothamBold = await readFile(
    join(process.cwd(), "public/fonts/Gotham-Bold.otf"),
  );
  const gothamMedium = await readFile(
    join(process.cwd(), "public/fonts/GothamMedium.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #FAF6F0 0%, #E8EFF7 55%, #D6E4F0 100%)",
          color: ink,
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: `1px solid ${muted}33`,
            borderRadius: "28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "440px",
            height: "440px",
            borderRadius: "9999px",
            background: `${accent}AA`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: accentLight,
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Gotham",
              fontSize: 28,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            Lamor
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "860px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Gotham",
                fontSize: 84,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              Less swiping,
              <br />
              more meeting.
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Gotham",
                fontSize: 30,
                lineHeight: 1.35,
                color: "#3A3A3A",
                maxWidth: "760px",
              }}
            >
              A modern matchmaking experience designed for real, intentional
              connection.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Gotham",
          data: gothamMedium,
          style: "normal",
          weight: 400,
        },
        {
          name: "Gotham",
          data: gothamBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
