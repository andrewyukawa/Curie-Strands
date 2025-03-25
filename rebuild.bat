@echo off
echo Cleaning directories...
if exist out rmdir /s /q out
if exist tempts rmdir /s /q tempts

echo Creating output directory...
mkdir out

echo Copying files...
copy index.html out\index.html
xcopy /s /i /y static out
copy node_modules\remixicon\fonts\remixicon.css out
copy node_modules\remixicon\fonts\remixicon.woff2 out
xcopy /s /i /y ts tempts

echo Building project...
node scripts\replace-ws-address.js
npx esbuild --bundle base.css --outfile=out\bundle.css --external:remixicon.css --external:../fonts/hanken* --external:../fonts/NeverMind* --minify
npx esbuild --target=es6 --bundle tempts\main.ts --sourcemap --outfile=out\main.js --minify
npx tailwindcss -c tailwind.config.js -i out\bundle.css -o out\bundle.css
xcopy /s /i /y images\src\*.svg out

echo Build complete!
echo Starting server...
npx live-server out 