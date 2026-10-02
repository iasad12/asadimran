import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateOgImage(title: string, subtitle: string = "Asad Imran Shah") {
    // Read the logo
    const logoPath = join(process.cwd(), "public/images/logo.png");
    const logoBuffer = readFileSync(logoPath);
    const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

    // Read local font
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
                {/* Header (Logo + Subtitle) */}
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <img
                        src={logoSrc}
                        alt="Logo"
                        width={80}
                        height={80}
                        style={{ borderRadius: "12px" }}
                    />
                    <span style={{ color: "#00ff9d", fontSize: "36px", fontWeight: "bold" }}>
                        {subtitle}
                    </span>
                </div>

                {/* Main Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1
                        style={{
                            fontSize: "84px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            lineHeight: 1.1,
                            margin: 0,
                            maxWidth: "1000px",
                        }}
                    >
                        {title}
                    </h1>
                </div>

                {/* Footer (Contact Info) */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "40px",
                        borderTop: "2px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "32px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.371.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span style={{ color: "#d1d5db", fontSize: "24px" }}>+92 304 6769150</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff9d" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span style={{ color: "#d1d5db", fontSize: "24px" }}>asadimran.pages.dev</span>
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
