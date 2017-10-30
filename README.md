# Docker-Compose App

This is a simple app using two containers to display some JSON data from an Express server.  

#### Build the app
```bash
git clone https://github.com/8483/docker-compose-app.git
cd docker-compose-app
sudo docker-compose build
sudo docker-compose up
```

#### Use the app
`localhost:8080` - App.  
`localhost:3000` - Server API.  

If the containers are run in a VM, the 2 NAT port-forwardings are needed.  
- (Host 3000 > Guest 3000) > Express 3000  
- (Host 8080 > Guest 8080) > Nginx 80  

## Docker Installation
```bash
# Install Docker CE
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce

# Install Docker-Compose
sudo -i # Switch to root for a moment.
curl -L https://github.com/docker/compose/releases/download/1.17.0-rc1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
su - <USER> # Leave root.  
```
