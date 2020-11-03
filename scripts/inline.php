#!/usr/bin/env php
<?php
chdir(__DIR__ . '/../src');
$dist = __DIR__ . '/../dist';

$html = file_get_contents('index.html');

// inline stylesheets and scripts
$html = preg_replace_callback('/((href|src)=")([^"]+)/', function ($matches) {
  $filename = $matches[3];
  if (strpos($filename, 'shadow.elemecdn.com') === false) {
    return $matches[0];
  }
  fprintf(STDERR, "resolving %s...\n", $filename);
  $content_type = $matches[2] === 'href' ? 'text/css' : 'text/javascript';
  $base64_content = base64_encode(file_get_contents($filename));
  $data_url = "data:$content_type;base64,$base64_content";
  return $matches[1] . $data_url;
}, $html);

if (!is_dir($dist)) {
  mkdir($dist, 0755, true);
}
file_put_contents($dist . '/index.inline.html', $html);
