# Hawaii

## Setup

```bash
docker build -t hawaii .
docker run -d -p 3000:3000 hawaii
```

## History

```bash
npx create-next-app hawaii
touch tsconfig.json
npm run dev
yarn add --dev typescript @types/react @types/node
npm run dev
mv index.js index.jsx
mv _app.js _app.jsx
npx next telemetry disable
```

## Image results

Sizes for 4 images on page.

| Case | Description                                         |
| ---: | --------------------------------------------------- |
|    1 | `<img>` tag with css grid                           |
|    2 | `<Image>` nextjs tag with css flex on 1200px screen |

| Case | r-k-r-1 | r-k-r-2 |  h-b-1 |  h-b-2 |  Img |
| ---: | ------: | ------: | -----: | -----: | ---: |
|    1 |  796 kB |  1.1 MB | 581 kB | 209 kB |  jpg |
|    2 |   73 kB |  105 kB |  60 kB |  19 kB | webp |
