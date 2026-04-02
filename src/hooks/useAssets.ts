import { useState, useEffect } from 'react';
import { AssetManifest } from '../types';

const BASE = process.env.PUBLIC_URL + '/assets';

/** Check if a URL actually exists (returns true/false) */
async function fileExists(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

export function useAssets() {
  const [manifest, setManifest] = useState<AssetManifest | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // 1. Fetch manifest.json
        const res = await fetch(`${BASE}/manifest.json`);
        const raw: AssetManifest = await res.json();

        // 2. Filter images — keep only files that actually exist on disk
        const imageChecks = await Promise.all(
          (raw.images ?? []).map(async (path) => {
            const url = `${BASE}/${path}`;
            const exists = await fileExists(url);
            return exists ? path : null;
          })
        );
        const validImages = imageChecks.filter((p): p is string => p !== null);

        // 3. Filter videos — same
        const videoChecks = await Promise.all(
          (raw.videos ?? []).map(async (path) => {
            const url = `${BASE}/${path}`;
            const exists = await fileExists(url);
            return exists ? path : null;
          })
        );
        const validVideos = videoChecks.filter((p): p is string => p !== null);

        // 4. Check audio
        const audioPath = raw.audio ?? 'audio/background.mp3';
        const audioExists = await fileExists(`${BASE}/${audioPath}`);

        setManifest({
          ...raw,
          images: validImages,
          videos: validVideos,
          audio: audioExists ? audioPath : '',
        });
      } catch {
        // manifest.json itself missing — empty state, app still renders
        setManifest({ images: [], videos: [], audio: '', captions: [] });
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const imageUrl = (path: string) => `${BASE}/${path}`;
  const videoUrl = (path: string) => `${BASE}/${path}`;
  const audioUrl = (path: string) => `${BASE}/${path}`;

  return { manifest, loading, imageUrl, videoUrl, audioUrl };
}
