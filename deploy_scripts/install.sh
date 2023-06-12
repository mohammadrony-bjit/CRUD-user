# Install Node and NPM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

# Install pm2 globally
npm install pm2 -g
pm2 update

# delete existing bundle
cd /home/ec2-user
rm -rf node