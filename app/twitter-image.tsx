import { generateSocialImage, size, contentType } from "./social-image";

export const alt = "Lamor preview card";

export { size, contentType };

export default function Image() {
  return generateSocialImage();
}
