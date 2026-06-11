import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterStatic from '@sveltejs/adapter-static';

const isTauri = process.env.BUILD_TARGET === 'tauri';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }: { filename: string }): boolean | undefined =>
      filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
  },
  kit: {
    adapter: isTauri
      ? adapterStatic({
          pages: '../client/frontend',
          assets: '../client/frontend',
          fallback: 'index.html',
        })
      : adapterCloudflare(),
  },
};

export default config;
