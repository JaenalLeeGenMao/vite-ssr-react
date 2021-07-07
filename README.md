## ViteJS SSR React Starter Kit

> to learn more about ViteJS [here](https://vitejs.dev)

## How to kickstart the project

Under the root directory <br/>
You can add `.env` files in advance <br/>

```bash
// This is a sample, change according to your needs
NODE_ENV=production
VITE_APP_TITLE=My App (staging)
```

You are required to add `src/env.d.ts`<br/>

```bash
// Based on sample above, you must update this part `ImportMetaEnv`
// so your editor knows the variables has been desclared
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  SSR: boolean;
}

interface ImportMeta {
  env: ImportMetaEnv;
  globEager: Function;
}
```
