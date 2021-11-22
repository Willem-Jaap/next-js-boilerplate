/**
 * Return image source using env variable
 * @param file: string, image file name
 * @returns full image path
 */
const image = (file) => {
    const imageDir = process.env.NEXT_PUBLIC_IMG_PATH;
    let fileName = file;

    if (!file.startsWith('/')) {
        fileName = '/' + fileName;
    }

    return imageDir + fileName;
};

export default image;
