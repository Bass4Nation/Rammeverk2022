
# Run one of the next.js versions created.
npx create-next-app basic -e https://github.com/Bass4Nation/NEXT-JS-Generator/tree/main/next-starter
# Move the created json to next js project
mv database.json ./basic/pages/api/data/
# Go into folder created
cd basic
# Start server
npm run dev


echo("To close the terminal press CTRL + C")
# Terminal wont close itself until keypress CTRL + C
read -r -d '' _ </dev/tty