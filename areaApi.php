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
        if (!file_exists('area_cache_dir/pref_cache.txt')) {
            $contents = @file_get_contents($url, false, stream_context_create($options));
            file_put_contents('area_cache_dir/pref_cache.txt', serialize($contents));
        } else {
            $data = file_get_contents('area_cache_dir/pref_cache.txt');
            $contents = unserialize($data);
        }
        break;
    case 'city':
        break;
    default:
        break;
}
echo $contents;
exit();
 ?>
