# Bare Metal

This guide describes how to install and run Kublade on a bare metal server (without Docker).

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

Make sure you have completed all steps in the [Prerequisites](/docs/prerequisites.md) section.

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

Edit `.env` to match your environment (database, cache, queue, etc.).

### 3. Install PHP Dependencies[​](#3-install-php-dependencies "Direct link to 3. Install PHP Dependencies")

```
composer install --optimize-autoloader --no-dev
```

### 4. Install Node.js Dependencies and Build Assets[​](#4-install-nodejs-dependencies-and-build-assets "Direct link to 4. Install Node.js Dependencies and Build Assets")

```
npm install
npm run build
```

### 5. Generate Application Key[​](#5-generate-application-key "Direct link to 5. Generate Application Key")

```
php artisan key:generate
```

### 6. Run Database Migrations[​](#6-run-database-migrations "Direct link to 6. Run Database Migrations")

```
php artisan migrate --force
```

```
php artisan db:seed
```

### 7. Set Permissions[​](#7-set-permissions "Direct link to 7. Set Permissions")

Ensure the web server user (e.g., `www-data`) can write to `storage` and `bootstrap/cache`:

```
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

### 8. Configure Supervisor for Horizon[​](#8-configure-supervisor-for-horizon "Direct link to 8. Configure Supervisor for Horizon")

Create a Supervisor configuration file (e.g., `/etc/supervisor/conf.d/kublade-horizon.conf`):

```
[program:kublade-horizon]
process_name=%(program_name)s
command=php /path/to/kublade/artisan horizon
autostart=true
autorestart=true
user=www-data
redirect_stderr=true
stdout_logfile=/var/log/kublade-horizon.log
```

Reload Supervisor:

```
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start kublade-horizon
```

### 9. Configure Web Server[​](#9-configure-web-server "Direct link to 9. Configure Web Server")

Configure your web server (Nginx or Apache) to serve the `public` directory of Kublade.

**Nginx Example:**

```
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/kublade/public;

    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### 10. Start the Application[​](#10-start-the-application "Direct link to 10. Start the Application")

* Visit your server's domain or IP in the browser.
* Kublade should now be running.

### 11. (Optional) Set Up Scheduler[​](#11-optional-set-up-scheduler "Direct link to 11. (Optional) Set Up Scheduler")

Add the Laravel scheduler to your crontab:

```
* * * * * www-data cd /path/to/kublade && php artisan schedule:run >> /dev/null 2>&1
```
