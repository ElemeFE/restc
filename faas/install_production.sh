#!/bin/bash

grep -Pzo "<script extract>\s*\K([\s\S]+?)(?=\s*</script>)" index.html | tr '\0' '\n' > index.js
sed -i '/<script extract>/{:b;$!N;/<\/script>/!bb;s/.*/<script src="https:\/\/faas.elemecdn.com\/restc\/index.js"><\/script>/}' index.html
