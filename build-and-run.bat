@echo off
echo Creating directories...
if not exist out mkdir out
if not exist tempts mkdir tempts

echo Copying files...
copy index.html out\index.html
xcopy /s /i /y static out
xcopy /s /i /y node_modules\remixicon\fonts\remixicon.css out
xcopy /s /i /y node_modules\remixicon\fonts\remixicon.woff2 out
xcopy /s /i /y ts tempts

echo Building project...
node scripts\replace-ws-address.js
npx esbuild --bundle base.css --outfile=out\bundle.css --external:remixicon.css --external:../fonts/hanken* --external:../fonts/NeverMind* --minify
npx esbuild --target=es6 --bundle tempts\main.ts --sourcemap --outfile=out\main.js --minify
npx tailwindcss -c tailwind.config.js -i out\bundle.css -o out\bundle.css
xcopy /s /i /y images\src\*.svg out

echo Starting server...
npx live-server out 