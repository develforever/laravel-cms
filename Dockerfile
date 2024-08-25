FROM dunglas/frankenphp

RUN apt update && apt install -y nano wget curl procps net-tools

RUN install-php-extensions \
    pcntl \
    pdo_mysql \
    pdo_pgsql \
	gd \
	intl \
	zip \
	opcache \
	xdebug

