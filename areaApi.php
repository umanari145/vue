<?php

require_once('area_config.php');

$options = array (
   'http' => array (
       'method' => 'GET',
       'header' => 'X-API-KEY:'. API_KEY,
       'ignore_errors' => true,
       )
  );

$contents = null;
switch ($_GET['area_mode']) {
    case 'pref':
        $url = API_URL . 'prefectures';
        $cache_file =  __dir__ . '/area_cached_dir/pref_cache.txt';
        if (!file_exists($cache_file)) {
            $contents = @file_get_contents($url, false, stream_context_create($options));
            file_put_contents($cache_file, serialize($contents));
        } else {
            $data = file_get_contents($cache_file);
            $contents = unserialize($data);
        }
        break;
    case 'city':
        $city_cds = @$_GET['city_cds']?:[];
        $city_cd_arr = explode(',', $city_cds);
        $contents = [];
        foreach ($city_cd_arr as $each_city_cd) {
            $url = API_URL . 'cities?prefCode='. $each_city_cd;
            $cache_file = sprintf('%s/area_cached_dir/city_%s_cache.txt', __dir__, $each_city_cd);
            if (!file_exists($cache_file)) {
                $each_contents = @file_get_contents($url, false, stream_context_create($options));
                file_put_contents($cache_file, serialize($each_contents));
            } else {
                $data = file_get_contents($cache_file);
                $each_contents = unserialize($data);
            }
            $contents[$each_city_cd] = json_decode($each_contents, true);
        }
        $contents = json_encode($contents);
        break;
    default:
        break;
}
echo $contents;
exit();
