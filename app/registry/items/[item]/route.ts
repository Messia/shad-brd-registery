import { list } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

// Added dynamic export for force-dynamic rendering
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest, { params }: { params: { item: string } }) {
  try {
    const { item } = params

    // Get current commit SHA for fingerprinting
    const commitSha = process.env.VERCEL_DEPLOYMENT_ID || "local"

    // List all blobs with the registry-item prefix for this item
    const { blobs } = await list({
      prefix: `registry-item-${item}-`,
    })

    if (blobs.length === 0) {
      return NextResponse.json({ error: `Registry item '${item}' not found` }, { status: 404 })
    }

    // Try to find blob matching current commit SHA
    let targetBlob = blobs.find((blob) => blob.pathname === `registry-item-${item}-${commitSha}.json`)

    // If no exact match, use the most recent blob
    if (!targetBlob) {
      targetBlob = blobs.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())[0]
    }

    // Fetch the blob content
    const response = await fetch(targetBlob.url)

    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${response.statusText}`)
    }

    const registryItem = await response.json()

    return NextResponse.json(registryItem, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error serving registry item:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
