hexo.extend.generator.register('weather_config', function (locals) {
  return {
    path: 'js/weather-config.js',
    data: 'window.BLOG_WEATHER_CONFIG=' + JSON.stringify(locals.data.welcome || {}) + ';'
  };
});
