echo 'Starting local development environment...'

echo 'Starting gulp build...'
start powershell -argumentlist "-noexit","-command","$host.ui.RawUI.WindowTitle = 'Gulp Build'; gulp"

echo 'Starting Karma test runner'
start powershell -argumentlist "-noexit","-command","$host.ui.RawUI.WindowTitle = 'Karma Test'; gulp test"

echo 'Starting local HTTP server...'
cd ./src
start powershell -argumentlist "-noexit","-command","$host.ui.RawUI.WindowTitle = 'HTTP server'; http-server"
cd ..

echo 'Starting Code instance...'
code .

echo 'Opening up local site in Chrome...'
start http://localhost:8080

echo 'Opening up a git bash window at the root of the repo...'
start "C:\Program Files\Git\git-bash.exe"

echo 'Done.  Happy developing.'