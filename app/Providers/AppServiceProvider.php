<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Arr;
use App\Http\Middleware\SsrMiddleware;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['router']->pushMiddlewareToGroup('web', SsrMiddleware::class);
        View::addExtension('js', 'blade');
        View::composer('*', function ($view) {
            $viewPath = $view->getPath();

            $ext = pathinfo($viewPath, PATHINFO_EXTENSION);
            if ($ext !== 'js') return;

            $props = Arr::except(
                array_merge(
                    (array) $view->getFactory()->getShared(),
                    $view->getData()
                ),
                ['__env', 'app']
            );

            $viewDir = resource_path('views');
            $viewName = str_replace($viewDir . '/', '', $viewPath);
            $viewName = explode('.', $viewName)[0];

            $view->setPath(__DIR__ . '/json.blade.php');
            $view->with(
                'data',
                json_encode([
                    'component' => $viewName,
                    'props' => $props,
                ])
            );
        });
    }
}
