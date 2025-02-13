---
layout: post
title: Setting up a WordPress Environment with Docker Compose
published: true
categories: docker
tags: wordpress
---

Using **Docker Compose** is a quick way to set up temporary environments, avoiding dependency headaches for projects that might be discarded at the end of the day. Here's how I quickly created a 'throwaway' [WordPress](https://wordpress.com/) environment.

<!--more-->

## **Prerequisites**

- [Docker](https://www.docker.com/) installed on your system
- [Docker Compose](https://docs.docker.com/compose/) installed

## **Step 1: Create a `docker-compose.yml` File**

Create a new directory for your project and inside it, create a `docker-compose.yml` file with the [following content](https://github.com/gregstanley/dockerfile-variations/blob/master/wordpress/docker-compose.yml):

```yaml
version: "3.8"

services:
  wordpress:
    image: wordpress:latest
    container_name: wordpress
    restart: always
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress_data:/var/www/html

  db:
    image: mysql:5.7
    container_name: wordpress_db
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - db_data:/var/lib/mysql

volumes:
  wordpress_data:
  db_data:
```

## **Step 2: Start the Containers**

Run the following command in the same directory as `docker-compose.yml`:

```sh
docker-compose up -d
```

This will:

- Pull the latest [WordPress](https://wordpress.com/) and MySQL images.
- Start both containers.
- Expose [WordPress](https://wordpress.com/) on **http://localhost:8080**.

## **Step 3: Complete the WordPress Setup**

1. Open [http://localhost:8080](http://localhost:8080) in your browser.
2. Follow the [WordPress](https://wordpress.com/) installation steps.
3. Enter the database details:
   - **Database Name:** `wordpress`
   - **Username:** `wordpress`
   - **Password:** `wordpress`
   - **Database Host:** `db`

## **Managing Your Environment**

To **stop the environment**:

```sh
docker-compose down
```

To **remove everything, including stored data**:

```sh
docker-compose down -v
```

Now you have a fully functional, self-contained [WordPress](https://wordpress.com/) environment running with [Docker](https://www.docker.com/) (and you can just delete it when your done).
