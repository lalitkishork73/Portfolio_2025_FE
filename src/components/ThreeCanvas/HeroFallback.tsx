function HeroFallback () {
    return (
        <div className="h-full flex items-center justify-center text-center px-6 text-white">
            <p className="max-w-md">
                Interactive 3D experience is unavailable on this device.
                <br />
                Please continue scrolling to explore the site.
            </p>
        </div>
    )
}

export default HeroFallback
