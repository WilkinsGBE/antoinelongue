export type Project = {
  slug: string;
  title: string;
  date?: string;
  location?: string;
  services?: string[];
  summary?: string;
  hero?: string;
  gallery: string[];
  presetComparison?: {
    original: string;
    preset: string;
  };
  credits?: { client?: string; role?: string; collaborators?: string[] };
  theme?: { accent?: string };
};
