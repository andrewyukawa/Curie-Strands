# Build and push changes
Write-Host "Building project..."
.\rebuild.bat
Write-Host "Finishing build..."
npx esbuild --target=es6 --bundle tempts\main.ts --sourcemap --outfile=out\main.js --minify
npx tailwindcss -c tailwind.config.js -i out\bundle.css -o out\bundle.css
xcopy /s /i /y images\src\*.svg out

Write-Host "Committing changes..."
git add .
git commit -m "Improve word list with 4+ letter words"
git push

Write-Host "Done!" 