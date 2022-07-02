<?php

require_once __DIR__ . './../vendor/autoload.php';

$import_csv_to_redis = new ImportCSVtoRedis('tcp', 'redis', 6379);
$import_csv_to_redis->import();

class ImportCSVtoRedis
{
    private $redis;

    public function __construct(string $schema, string $redis_host, int $port)
    {
        // https://qiita.com/nazonohito51/items/a69751ec153007526183
        // php-redisのメソッド
        $this->redis = new Redis();
        // hostとport
        $this->redis->connect('redis', 6379);
    }

    public function import()
    {
        $csv_file_path = __DIR__ .  "/KEN_ALL.CSV";
        $fp = fopen($csv_file_path, "r");
        $count = 0;
        // ↓とexecでbulk insert(10万件が2〜3秒で終わる)
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
        }
        $this->redis->exec();
    }
}
