echo "⚠️ Work in progress, use with caution"
echo "⚠️ Please edit this file and remove the exit"
exit -2

echo "Cloning Zentrox to current directory"
git clone https://github.com/Wervice/zentrox/ ~/zentrox # Clones Codelink repo to current folder
cd ~/zentrox # Got to zentrox_server folder
echo "Downloaded Zentrox into ~/zentrox"

if ! command npm -v &> /dev/null
then
	echo "Node Package Manager (npm) is not installed. To fix this issue, please install nodejs."
	echo "The command to do this may look like this:"
	echo -E sudo apt install node OR sudo apt install nodejs
	exit -1
fi

if ! command pip3 -v &> /dev/null
then
	echo "Python Package Manager (pip3) is not installed. To fix this issue, please install python3."
	echo "The command to do this may look like this:"
	echo -E sudo apt install python3
	exit -1
fi

echo "Installing dependencies"
npm -q install express body-parser cookie-parser express-session node-os-utils ejs compression # Install node_packages
sudo pip3 -q install pyftpdlib PyOpenSSL 

echo "Generating selfsigned keys"
openssl genrsa -out selfsigned.key 2048
openssl req -new -key selfsigned.key -out selfsigned.pem
openssl x509 -req -days 365 -in selfsigned.pem -signkey selfsigned.key -out selfsigned.crt

echo "Creating PEM file from key and crt"
cat selfsigned.crt selfsigned.key > selfsigned.pem

echo `
The installer has downloaded Zentrox and created a fresh set of self-signed certificates.
These will be used to protect your connections from hackers.

In addition to that several new NPM packages and Python (pip3) packages were downloaded.
`

node index.js 