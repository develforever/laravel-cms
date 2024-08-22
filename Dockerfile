FROM dunglas/frankenphp

RUN install-php-extensions \
    pcntl \
    pdo_mysql \
    pdo_pgsql \
	gd \
	intl \
	zip \
	opcache

