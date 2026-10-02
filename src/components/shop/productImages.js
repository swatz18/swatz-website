const productImages = import.meta.glob(
    "../../assets/images/products/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default"
    }
);
const productVideos = import.meta.glob(
    "../../assets/images/products/**/*.{mp4,webm,mov}",
    {
        eager: true,
        import: "default"
    }
);

export function getProductImages(folderName) {

    return Object.entries(productImages)
        .filter(([path]) =>
            path.includes(`/products/${folderName}/`)
        )
        .sort(([a], [b]) =>
            a.localeCompare(b, undefined, {
                numeric: true
            })
        )
        .map(([, image]) => image);

}
export function getProductVideo(folderName) {

    const video = Object.entries(productVideos)
        .filter(([path]) =>
            path.includes(`/products/${folderName}/`)
        )
        .sort(([a], [b]) =>
            a.localeCompare(b, undefined, {
                numeric: true
            })
        )
        .map(([, video]) => video);

    return video[0] || null;
}