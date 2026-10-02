import { generateOgImage } from "@/lib/og/template";

export const runtime = "nodejs";
export const dynamic = "force-static";
export { size, contentType } from "@/lib/og/template";

export default async function Image() {
    return generateOgImage("Case Studies");
}
