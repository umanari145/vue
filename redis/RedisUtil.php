<?php

require_once __DIR__ . './../vendor/autoload.php';

use Illuminate\Support\Collection;

class RedisUtil
{
    private $redis;

    public function __construct(string $redis_host, int $port)
    {
        // https://qiita.com/nazonohito51/items/a69751ec153007526183
        // php-redisのメソッド
        $this->redis = new Redis();
        // hostとport
        $this->redis->connect($redis_host, $port);
    }

    // csvデータをインポート(bulk)　hash型
    /*public function import(): void
    {
        $csv_file_path = __DIR__ .  "/KEN_ALL.CSV";
        $fp = fopen($csv_file_path, "r");
        $count = 0;
        // ↓とexecでbulk insert(10万件が2秒ぐらいで終わる)
        $this->redis->multi(Redis::PIPELINE);
        while ($line = fgetcsv($fp)) {
            $count++;
            $zip  = sprintf("%07d", $line[0]);
            $pref = $line[1];
            $city = $line[2];
            $town = ($line[3] === '以下に掲載がない場合' ? "" : $line[3]);

            $this->redis->hSet($zip, 'pref', $pref);
            $this->redis->hSet($zip, 'city', $city);
            $this->redis->hSet($zip, 'town', $town);
            if ($count === 100) {
                break;
            }
        }
        $this->redis->exec();
    }*/

    // csvデータをインポート(bulk)　list型
    public function import(): void
    {
        $csv_file_path = __DIR__ .  "/zenkoku.CSV";
        $fp = fopen($csv_file_path, "r");
        $count = 0;
        // ↓とexecでbulk insert(12万件が2秒ぐらいで終わる)
        $this->redis->multi(Redis::PIPELINE);
        while ($line = fgetcsv($fp)) {
            $count++;
            if ($count === 1) {
                continue;
            }

            $pref_cd = $line[1];
            $pref_name = $line[5];
            $city_cd = $line[2];
            $city_name = $line[7];
            $town_cd = $line[3];
            $town_name = $line[9];

            $address_info = sprintf(
                "%s_%s_%s_%s_%s_%s",
                $pref_cd,
                $pref_name,
                $city_cd,
                $city_name,
                $town_cd,
                $town_name
            );

            $this->redis->sAdd('address', $address_info);
        }
        $this->redis->exec();
    }


    // データ取得 hash型のbulkget
    /*public function getItem(array $search_query = [])
    {
        $all_items = [];
        // pipelineだと取得が後になるので、データが取れない
        /*$this->redis->pipeline();
        foreach ($all_keys as $key) {
            $item = $this->redis->hgetall($key);
            $all_items[$key] = $item;
        }
        $this->redis->exec();


        // これで取れそうだがこれもだめ・・・
        $all_items = $this->redis->pipeline(function ($pipe) use ($all_keys) {
            foreach ($all_keys as $key) {
                $pipe->hgetall($key);
            }
        });

    }*/

    public function getItem()
    {
        $all_items = $this->redis->sMembers('address');

        $data = [];
        foreach ($all_items as $item) {
            $tmp = explode("_", $item);
            $data[] = [
                'pref_cd' => $tmp[0],
                'pref_name' => $tmp[1],
                'city_cd' => $tmp[2],
                'city_name' => $tmp[3],
                'town_cd' => $tmp[4],
                'town_name' => $tmp[5]
            ];
        }
        return $data;
    }
}
