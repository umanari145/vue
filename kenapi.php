<?php

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/redis/RedisUtil.php';

use Illuminate\Support\Collection;


$contents = [];
$http_status_code;

$redis_util = new RedisUtil('redis', 6379);
$items = $redis_util->getItem();
$item_collection = collect($items);

switch ($_GET['area_type']) {
    case 'pref':
        $prefs = $item_collection
            ->pluck('pref_name', 'pref_cd')
            ->sort()
            ->unique()
            ->toArray();
        if (!empty($prefs)) {
            $contents['data'] = $prefs;
            $http_status_code = 200;
        } else {
            $http_status_code = 400;
        }

        break;
    case 'city':
        $pref_cd = @$_GET['pref_cd'] ?: '';
        $cities = $item_collection
            ->filter(function ($v) use ($pref_cd) {
                return $v['pref_cd'] == $pref_cd;
            })
            ->pluck('city_name', 'city_cd')
            ->unique()
            ->toArray();
        if (!empty($cities)) {
            $contents['data'] = $cities;
            $http_status_code = 200;
        } else {
            $http_status_code = 400;
        }
        break;
    case 'town':
        $city_cd = @$_GET['city_cd'] ?: '';
        $city_cds = explode(",", $city_cd);
        $group_towns = $item_collection
            ->map(function ($v) {
                if ($v['town_name'] === '') {
                    $v['town_name'] = '記載なし';
                }
                return $v;
            })
            ->filter(function ($v) use ($city_cds) {
                return in_array($v['city_cd'], $city_cds);
            })
            ->groupBy('city_name');

        $group_towns2 = $group_towns->map(function ($v) {
            return $v->pluck('town_name', 'town_cd')
                ->unique()
                ->toArray();
        });

        if (!empty($group_towns2)) {
            $contents['data'] = $group_towns2;
            $http_status_code = 200;
        } else {
            $http_status_code = 400;
        }
        break;
    default:
        break;
}

header("Content-Type: application/json; charset=utf-8", true, $http_status_code);
echo json_encode($contents);
exit();
