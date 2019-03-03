<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Home', ['title' => 'Home']);
});

Route::get('/about', function () {
    return view('About', [
        'title' => 'About',
        'body' => 'Lorem ipsum dolor sit amet',
    ]);
});

Route::get('/blog', function () {
    return view('Blog', [
        'articles' => App\Article::all(),
    ]);
});
