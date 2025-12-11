import { list } from "@vercel/blob"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const commitSha = process.env.VERCEL_DEPLOYMENT_ID || "local"

    // List all registry blobs
    const { blobs } = await list({
      prefix: "registry-",
    })

    // Find blob matching current commit SHA
    let targetBlob = blobs.find((blob) => blob.pathname === `registry-${commitSha}.json`)

    // Fallback to most recent blob if no exact match
    if (!targetBlob && blobs.length > 0) {
      targetBlob = blobs.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0]
    }

    if (!targetBlob) {
      return Response.json({}, { status: 200 })
    }

    // Fetch content from blob URL
    const response = await fetch(targetBlob.url)
    const jsonData = await response.json()

    return Response.json(jsonData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error fetching from blob:", error)
    return Response.json({}, { status: 200 })
  }
}
