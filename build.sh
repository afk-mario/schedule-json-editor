#!/bin/bash
npm run build
cp -v build/static/js/main.*.js build/static/sb.js
cp -v build/static/css/main.*.css build/static/sb.css
