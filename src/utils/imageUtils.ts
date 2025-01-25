const assets = import.meta.glob("/src/assets/*.{webp,png,jpg}");

export const getImagePath = (image: string): string | undefined => {
  const normalizedImage = image.toLowerCase();

  for (const ext of ["webp", "png", "jpg"]) {
    const path = `/src/assets/${normalizedImage}.${ext}`;

    if (assets[path]) {
      return path;
    }
  }
};
