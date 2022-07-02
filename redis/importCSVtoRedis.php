<?php

require_once __DIR__ . '/RedisUtil.php';

$redis_util = new RedisUtil('redis', 6379);
$redis_util->import();
