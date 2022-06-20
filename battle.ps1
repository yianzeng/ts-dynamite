$bot1=$args[0]
$bot2=$args[1]

npm run convert

node dynamite-cli.js dist/bots/$bot1.js dist/bots/$bot2.js 
