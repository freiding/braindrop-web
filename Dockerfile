# syntax=docker/dockerfile:1
#
# Multi-stage: compile the static site with a pinned Node toolchain, then serve
# the result with nginx. The runtime image carries neither Node nor the source.
#
#   docker build -t braindrop-web .                     # runtime image (nginx on :80)
#   docker build --target export --output type=local,dest=dist .   # just ./dist, no image

# ---- build ---------------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- export ------------------------------------------------------------------
# Artifact-only stage: `--output type=local` copies its contents to the host.
FROM scratch AS export
COPY --from=build /app/dist/ /

# ---- runtime ---------------------------------------------------------------------
# Plain nginx serving the pre-built static files. This is the default target.
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
# nginx:alpine's own CMD already runs nginx in the foreground.
