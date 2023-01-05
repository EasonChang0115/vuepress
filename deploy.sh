#!/usr/bin/env sh
# abort on errors
set -e
# navigate into the build output directory
cd .vuepress/dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git config --global user.email "s8710606@gmail.com"
git config --global user.name "EasonChang0115"
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
git push -f https://${GITHUB_TOKEN}@github.com/EasonChang0115/EasonChang0115.github.io.git master
# git push -f https://github.com/EasonChang0115/EasonChang0115.github.io.git master
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages/
cd -