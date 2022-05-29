
# Run one of the next.js versions created.
npx create-next-app basic-pages -e https://github.com/Bass4Nation/NEXT-JS-Generator/tree/main/next-starter-pages
# Move the created json to next js project
mv database.json ./basic-pages/pages/api/data/
# Go into folder created
cd basic-pages
# Start server
npm run dev

# Terminal wont close itself until keypress CTRL + C
read -r -d '' _ </dev/tty