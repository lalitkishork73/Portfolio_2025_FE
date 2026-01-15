import { useEffect } from "react"

type SEOProps = {
    title: string
    description: string
    keywords?: string
    canonical?: string
    image?: string
    noIndex?: boolean
}

export default function SEO ({
    title,
    description,
    keywords,
    canonical,
    image,
    noIndex = false
}: SEOProps) {
    useEffect(() => {
        document.title = title

        setMeta("description", description)
        if (keywords) setMeta("keywords", keywords)

        if (canonical) {
            let link = document.querySelector("link[rel='canonical']")
            if (!link) {
                link = document.createElement("link")
                link.setAttribute("rel", "canonical")
                document.head.appendChild(link)
            }
            link.setAttribute("href", canonical)
        }

        setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow")

        if (image) {
            setProperty("og:image", image)
            setProperty("twitter:image", image)
        }

        setProperty("og:title", title)
        setProperty("og:description", description)
        setProperty("og:type", "website")

        setProperty("twitter:card", "summary_large_image")
        setProperty("twitter:title", title)
        setProperty("twitter:description", description)
    }, [
        title,
        description,
        keywords,
        canonical,
        image,
        noIndex
    ])

    return null
}

function setMeta (name: string, content: string) {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute("name", name)
        document.head.appendChild(meta)
    }
    meta.setAttribute("content", content)
}

function setProperty (property: string, content: string) {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
        meta = document.createElement("meta")
        meta.setAttribute("property", property)
        document.head.appendChild(meta)
    }
    meta.setAttribute("content", content)
}
