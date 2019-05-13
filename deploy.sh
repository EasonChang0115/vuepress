#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd docs/.vuepress/dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
git push -f https://99582ba52fef23f42579d392fb874c2be13ead69@github.com/EasonChang0115/EasonChang0115.github.io.git master
# git push -f https://github.com/EasonChang0115/EasonChang0115.github.io.git master
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages/
cd -