wd=`pwd`
temp=`mktemp -d`

cd $temp

curl -s -L https://github.com/goobl-in/gooblin-frontend/archive/refs/heads/main.zip -o front.zip
unzip front.zip
cd gooblin-frontend-main/src

npm install
npm run build 

ls "$temp/gooblin-frontend-main/build"

mv "$temp/gooblin-frontend-main/build" "$wd/webroot"

cd "$wd"