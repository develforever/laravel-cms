
> :warning: Development use only :warning:


# Laravel and React CMS - Content Management System (Backend)

## Description
CMS based on PHP and JavaScript without compilers. This project is backend part form management user content (post, pages, media). Second part will be frontend where conten will be displayed.

## Motivation 
I create this project for my portfolio. My work and interests are all about programing in PHP and JavaScript and I put this together to make my hobby more wide open for IT community.

## Running env
As a run environment is used docker (docker compose), FrakenPHP and Mysql.


## Tokens

Update token abilities to `<user_id>` and `<token_plain_text>` and add all possible.
```
php artisan app:user-token-abilities <user_id> '<token_plain_text>' --abl=all
```

