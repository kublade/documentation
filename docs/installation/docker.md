# Docker

This guide describes how to install and run Kublade using Docker and docker-compose (Laravel Sail).

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Make sure you have completed all steps in the [Prerequisites](/docs/prerequisites.md) section. Additionally, please ensure your environment meets the following requirements:

* **Docker & Docker Compose:** For local development and deployment

## Installation[​](#installation "Direct link to Installation")

### 1. Clone the Repository[​](#1-clone-the-repository "Direct link to 1. Clone the Repository")

```
git clone https://github.com/kublade/kublade.git
cd kublade
```

### 2. Configure Environment[​](#2-configure-environment "Direct link to 2. Configure Environment")

Copy the example environment file and adjust settings as needed:

```
cp .env.example .env
```

Edit `.env` to match your environment if necessary.

### 3. Start the Containers[​](#3-start-the-containers "Direct link to 3. Start the Containers")

Use Docker Compose to start all services:

```
docker-compose up -d
```

This will build and start all required containers (app, database, etc.) using Laravel Sail.

### 4. Install Dependencies (First Run Only)[​](#4-install-dependencies-first-run-only "Direct link to 4. Install Dependencies (First Run Only)")

Enter the application container:

```
docker-compose exec laravel.test bash
```

Inside the container, run:

```
composer install
npm install
npm run build
php artisan key:generate
php artisan migrate --force
php artisan db:seed
```

### 5. Access the Application[​](#5-access-the-application "Direct link to 5. Access the Application")

* Visit <http://localhost> in your browser.
* Kublade should now be running.

### 6. Horizon and Scheduler[​](#6-horizon-and-scheduler "Direct link to 6. Horizon and Scheduler")

* Laravel Horizon and the scheduler are managed by Sail and Supervisor inside the container.
* You can check Horizon with:

```
docker-compose exec laravel.test php artisan horizon:status
```

### 7. Stopping and Restarting[​](#7-stopping-and-restarting "Direct link to 7. Stopping and Restarting")

To stop the containers:

```
docker-compose down
```

To restart:

```
docker-compose up -d
```

## Production Configuration[​](#production-configuration "Direct link to Production Configuration")

### docker-compose.production.yml vs. docker-compose.yml[​](#docker-composeproductionyml-vs-docker-composeyml "Direct link to docker-compose.production.yml vs. docker-compose.yml")

* **docker-compose.yml** is intended for local development. It includes development-friendly settings, hot-reloading, and may expose more ports or use volumes for live code changes.
* **docker-compose.production.yml** is optimized for production deployments. It typically uses production-ready settings, disables development features, and may include optimizations for security, performance, and stability.

### How to Use for Production[​](#how-to-use-for-production "Direct link to How to Use for Production")

1. **Copy and configure your environment file for production:**

   ```
   cp .env.example .env
   # Edit .env for production settings (database, cache, mail, etc.)
   ```

2. **Build and start the production containers:**

   ```
   docker-compose -f docker-compose.production.yml up -d --build
   ```

3. **Run database migrations and other setup tasks:**

   ```
   docker-compose -f docker-compose.production.yml exec app php artisan migrate --force
   docker-compose -f docker-compose.production.yml exec app php artisan key:generate
   docker-compose -f docker-compose.production.yml exec app npm run build
   ```

4. **Access your application:**

   * The app will be available on the configured port (see `docker-compose.production.yml`).

5. **Stopping and Restarting in Production:**

   ```
   docker-compose -f docker-compose.production.yml down
   docker-compose -f docker-compose.production.yml up -d
   ```
