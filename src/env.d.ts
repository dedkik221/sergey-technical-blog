/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
  readonly PUBLIC_FEEDBACK_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
