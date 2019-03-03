<?php

namespace App\Http\Middleware;

use Closure;

class SsrMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        $content = $response->getContent();

        if (substr($content, 0, 8) === '__JSON__') {
            $response->header('Content-Type', 'application/json');
            $response->setContent(substr($content, 8));
        }

        return $response;
    }
}
