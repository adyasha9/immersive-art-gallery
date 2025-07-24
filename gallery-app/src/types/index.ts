export interface CameraControls {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  mouseX: number;
  mouseY: number;
  isMouseDown: boolean;
  rotationX: number;
  rotationY: number;
}

export interface GallerySettings {
  moveSpeed: number;
  mouseSensitivity: number;
  cameraHeight: number;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  period: string;
  year: string;
  imageUrl: string;         
  description: string;
  creditLine: string;
  style: string;
  classification: string;
  subjects: string[];
}
