#!/bin/bash

grep --text -Pzo "<script extract>\s*\K([\s\S]+?)(?=\s*</script>)" index.html | tr '\0' '\n' > index.js
hash=$(md5sum index.js | cut -c 1-5)
mv index.js index-$hash.js
sed -i "/<script extract>/{:b;$!N;/<\/script>/!bb;s/.*/<script src=\"https:\/\/faas.elemecdn.com\/restc\/index-$hash.js\"><\/script>/}" index.html
