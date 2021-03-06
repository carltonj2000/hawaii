# Hawaii

To Do

- add sticky nav menu
- don't print times for 11:59PM
- add all option to view all pictures together
- fix map list details for each location
- make app a pwa
- allow addition of portrait pictures
- add animations for picture transitions

# Digital Ocean Release

```bash
# commands to run on development computer
yarn do:pics # upload picture to digital ocean
# commands to run on digital ocean
cd /home/carltonj2000/do20041/sites/tinaandcarlton/git
git clone git@github.com:carltonj2000/hawaii.git
cd hawaii
docker build -t hawaii .
docker run -v /renderws/carltonData/cj_pics/pics2021/hawaii:/carltonData/cj_pics/pics2021/hawaii -p 3000:3000 hawaii
docker run -v /Users/carltonjoseph/Pictures/pics2021/hawaii:/carltonData/cj_pics/pics2021/hawaii -p 3000:3000 hawaii
# commands to run on a mac development computer for a service
docker service create \
  --publish published=3000,target=3000 \
  --mount type=bind,src=/Users/carltonjoseph/Pictures/pics2020/hawaii,dst=/carltonData/cj_pics/pics2020/hawaii \
  --name hawaii \
  hawaii
# commands to run on the renderws development computer for a service
docker service create \
  --publish published=3000,target=3000 \
  --mount type=bind,src=/renderws/carltonData/cj_pics/pics2020/hawaii,dst=/carltonData/cj_pics/pics2020/hawaii \
  --name hawaii \
  hawaii
# commands to run on development computer for a stack
docker stack deploy hawaii --compose-file docker-compose.mac.yml
docker stack deploy hawaii --compose-file docker-compose.renderws.yml
# cheap and dirty rsyn until a good rsync script is working
rsync -av /Users/carltonjoseph/Pictures/pics2021/ carltonj2000@apps4tracking.com:/home/carltonj2000/do20041/sites/carltonData/cj_pics/pics2021/
rsync -av carltonjoseph@10.0.0.116:/Users/carltonjoseph/Pictures/pics2021/ /renderws/carltonData/cj_pics/pics2021/
# release on renderWs via a local repo
docker build -t hawaii .
pushd /renderws/carltonData/cj2021/code/docker/renderws-webserver/renderws/label; \
docker stack deploy -c docker-compose.tinaandcarlton.hawaii.yml renderws; \
popd
```

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

### Ignore Below Here - Just Notes

```

```
