FROM php:8.1-fpm


RUN apt-get update && apt-get install -y --no-install-recommends \
  zlib1g-dev mariadb-client \
  libpq-dev \
  libzip-dev \
  postgresql \
  unzip \
  git

RUN git clone https://github.com/phpredis/phpredis.git /usr/src/php/ext/redis

RUN docker-php-ext-install \
    pdo_mysql \
    sockets \
    zip \
    redis 

RUN  apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY --from=node:14.2 /usr/local/bin /usr/local/bin
COPY --from=node:14.2 /usr/local/lib /usr/local/lib

WORKDIR /var/www/html
