echo "First arg: $1"

git clone https://github.com/dwaypro/projectconfig.git
mv projectconfig $1
cd $1
cd src
mkdir $1
npm install
npm run build
npm run start