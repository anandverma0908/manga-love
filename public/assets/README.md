# 📁 Assets Folder — How to Use

## Folder Structure
```
public/assets/
├── images/          ← Put your photos here (.jpg .jpeg .png .webp)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... up to photo9.jpg
├── videos/          ← Put your videos here (.mp4 .webm)
│   └── video1.mp4
├── audio/           ← Put your background music here (.mp3 .ogg)
│   └── background.mp3
├── manifest.json    ← Controls what files the app loads
└── README.md
```

## Steps

### 1. Add Photos
Drop your photos into `public/assets/images/` named:
- `photo1.jpg` through `photo9.jpg`
- Supports: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Add Video (optional)
Drop a video into `public/assets/videos/` named `video1.mp4`.
- Panel 1 (the large left panel) will show the video if present.

### 3. Add Background Music
Drop your `.mp3` file into `public/assets/audio/` named `background.mp3`.

### 4. Update Captions
Edit `manifest.json` → `"captions"` array to change the text shown under each photo.

### 5. Add More Photos / Videos
Edit `manifest.json` to include more file paths:
```json
{
  "images": ["images/photo1.jpg", "images/photo2.jpg", ...],
  "videos": ["videos/video1.mp4", "videos/video2.mp4"],
  ...
}
```

## Run the App
```bash
npm start      # development
npm run build  # production build → deploy the /build folder
```
