// FIELDCORE Image Asset Registry for all generated machinery images & hero assets
// Uses ultra-lightweight WebP images for blazingly fast page loads on GitHub/GitLab Pages

const imageModules = import.meta.glob('./*.webp', { eager: true, import: 'default' });

/**
 * Get WebP image URL for image index (1 to 66) or hero keys ('h1', 'h2', 'h3')
 * @param {number|string} id - Image number e.g. 1 or "p1" or "h1"
 * @returns {string} - Bundled asset URL
 */
export const getImage = (id) => {
  if (id === 'h1' || id === 'h2' || id === 'h3') {
    return imageModules[`./${id}.webp`] || '';
  }

  let num = id;
  if (typeof id === 'string') {
    num = parseInt(id.replace(/\D/g, ''), 10);
  }
  if (!num || num < 1) num = 1;
  if (num > 66) num = ((num - 1) % 66) + 1;

  return imageModules[`./p${num}.webp`] || '';
};

// Hero images
export const heroImages = {
  h1: getImage('h1'),
  h2: getImage('h2'),
  h3: getImage('h3'),
};

// Export individual named references
export const images = {};
for (let i = 1; i <= 66; i++) {
  images[`p${i}`] = getImage(i);
}

export default images;
