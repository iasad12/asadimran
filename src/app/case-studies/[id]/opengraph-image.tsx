import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { caseStudies } from "@/data/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

interface Props {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export default async function Image({ params }: Props) {
    const { id } = params;
    const study = caseStudies.find((s) => s.id === id);

    if (!study) {
        return new ImageResponse(
            (
                <div style={{ background: "#0a001f", width: "100%", height: "100%" }}></div>
            ),
            { ...size }
        );
    }

    // Read the logo
    const logoPath = join(process.cwd(), "public/images/logo.png");
    const logoBuffer = readFileSync(logoPath);
    const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

    // Fetch Space Grotesk Bold font from local assets
    const fontPath = join(process.cwd(), "src/assets/SpaceGrotesk-Bold.ttf");
    const fontData = readFileSync(fontPath);

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0a001f",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "60px 80px",
                    fontFamily: '"Space Grotesk"',
                    borderTop: "12px solid #00ff9d",
                }}
            >
                {/* Header (Logo + Name + Category) */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                        <img
                            src={logoSrc}
                            alt="Logo"
                            width={80}
                            height={80}
                            style={{ borderRadius: "12px" }}
                        />
                        <span style={{ color: "#00ff9d", fontSize: "36px", fontWeight: "bold" }}>
                            Asad Imran Shah
                        </span>
                    </div>
                    <span style={{ 
                        color: "#0a001f", 
                        background: "#00ff9d",
                        padding: "8px 24px",
                        borderRadius: "9999px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em"
                    }}>
                        Case Study
                    </span>
                </div>

                {/* Main Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1
                        style={{
                            fontSize: "64px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            lineHeight: 1.1,
                            margin: 0,
                            maxWidth: "950px",
                        }}
                    >
                        {study.title}
                    </h1>
                </div>

                {/* Footer (Category & Date) */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        borderTop: "2px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "32px",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 24px",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" fill="#00ff9d" />
                        </svg>
                        <span style={{ color: "#d1d5db", fontSize: "24px" }}>{study.category}</span>
                    </div>
                    
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 24px",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "8px",
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" fill="#00ff9d" />
                        </svg>
                        <span style={{ color: "#d1d5db", fontSize: "24px" }}>{study.date}</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Space Grotesk",
                    data: fontData,
                    style: "normal",
                    weight: 700,
                },
            ],
        }
    );
}