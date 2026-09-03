# syntax=docker/dockerfile:1
#
# Build-only image: compiles the static site in a pinned Node toolchain so the
# server needs neither Node nor the source tree. It does NOT serve anything —
# serve the exported files with the web server of your choice.
#
#   docker build --output type=local,dest=dist .
#   # -> ./dist now holds the site; point your web server's root at it
#
# (Plain `docker build -t braindrop-web .` also works; the built files are then
#  at /app/dist inside the `build` stage.)

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Artifact-only stage: `--output` copies its contents to the host.
FROM scratch AS export
COPY --from=build /app/dist/ /
