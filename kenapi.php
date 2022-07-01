<?php

$contents = [];
$http_status_code;
switch ($_GET['area_type']) {
    case 'pref':
        $json_path =  __dir__  . '/pref.json';
        if (file_exists($json_path)) {
            $tmp = file_get_contents($json_path);
            $contents = json_decode($tmp, true);
            $http_status_code = 200;
        } else {
            $http_status_code = 400;
        }

        break;
    case 'city':
        $city_cds = @$_GET['city_cds'] ?: [];
        $json_path =  __dir__  . '/city.json';
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

header("Content-Type: application/json; charset=utf-8", true, $http_status_code);
echo json_encode($contents);
exit();
