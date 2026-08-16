const productImages = import.meta.glob(
    "../../assets/images/products/**/*.{png,jpg,jpeg,webp}",
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