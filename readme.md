# Serverless Laravel with Preact SSR

Demo: https://dkx26slzg0fzu.cloudfront.net/

Request comes in and node spawns a PHP process. Laravel returns some JSON that specifies which component to render and the data (props) for that component. Then, back in node, we render that component and return the HTML.

## Key files

* [Lambda function](https://github.com/bradlc/serverless-laravel-ssr/blob/master/handler.js)
* [Laravel routes](https://github.com/bradlc/serverless-laravel-ssr/blob/master/routes/web.php)

## Artisan

Artisan commands can be executed on the Lambda by specifying the API Gateway "stage" (Serverless Framework uses `dev` by default):

```bash
php artisan migrate --stage dev
```

## Local

You can serve the app locally by running `npm run serve`
