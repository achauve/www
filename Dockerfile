FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:2.9.0

COPY ./out /usr/share/nginx/html
