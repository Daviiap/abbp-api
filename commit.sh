currentBranch=$(git branch --show-current)

if [ $currentBranch = "main" ]; then
  echo "Você não pode usar esse comando na branch main!"
else
  git add .
  git commit -m $1
  git push --set-upstream origin $currentBranch
fi
