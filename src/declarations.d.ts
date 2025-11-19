// src/declarations.d.ts

// For PNG files
declare module "*.png" {
  const value: string;
  export default value;
}

// For JPG/JPEG files
declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

// Optionally, for SVGs too
declare module "*.svg" {
  const content: string;
  export default content;
}
