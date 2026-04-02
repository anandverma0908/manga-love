export interface AssetManifest {
  images: string[];
  videos: string[];
  audio: string;
  captions: string[];
}

export interface PhotoPanel {
  src: string;
  caption: string;
  index: number;
}

export interface VideoItem {
  src: string;
  index: number;
}
