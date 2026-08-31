/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_URL: string;
  /** Set once the app is live on the App Store; leave unset to show "coming soon". */
  readonly PUBLIC_IOS_APP_STORE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
