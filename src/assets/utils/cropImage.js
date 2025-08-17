// src/assets/utils/cropImage.js

/**
 * Creates an image element from a URL.
 * @param {string} url - The image URL.
 * @returns {Promise<HTMLImageElement>} - A promise that resolves with the image element.
 */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    // This is needed to prevent cross-origin issues when drawing the image onto the canvas.
    image.setAttribute('crossOrigin', 'anonymous'); 
    image.src = url;
  });

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-easy-crop
 * It returns a cropped image as a Blob.
 * @param {string} imageSrc - The source of the image to be cropped.
 * @param {Object} pixelCrop - The pixel crop values { x, y, width, height }.
 * @param {number} rotation - The rotation angle (optional).
 * @returns {Promise<Blob>} - A promise that resolves with the cropped image as a Blob.
 */
export default async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const rotRad = (rotation * Math.PI) / 180;

  // Calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // Set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // Translate canvas context to a central location to allow rotation and scaling
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(1, 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // Draw rotated image
  ctx.drawImage(image, 0, 0);

  // Get the cropped image data from the rotated canvas
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // Set the final canvas size to the cropped dimensions
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Paste the cropped image data onto the final canvas
  ctx.putImageData(data, 0, 0);

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Canvas is empty');
        reject(new Error('Canvas is empty'));
        return;
      }
      resolve(blob);
    }, 'image/jpeg');
  });
}

const rotateSize = (width, height, rotation) => {
  const rotRad = (rotation * Math.PI) / 180;
  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
};
