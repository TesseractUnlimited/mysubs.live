# mysubs.live
### Repo for Tesseract Unlimited's mysubs.live

### How to update your branch properly:
1. Commit all your changes to your personal branch and sync up to your 'origin/<branch_name>'.
  - ###### If you have any files you want to save, move them somewhere else or they will be rewritten or deleted!
2. Go to project root directory and run `git checkout master`.
3. Then run sync up your local 'master' branch with our 'origin/master' branch
  - ### WARNING: There should be no changes going from your local 'master' branch to our 'origin/master' branch! All your work should have been done on your local branch. The only thing that should be changing is your local 'master' branch.
4. Now run `git checkout <branch_name>`.
5. Then run `git merge master`.

### How to update 'origin/master' branch properly:
1. Commit all your changes to your personal branch and sync up to your 'origin/<branch_name>'.
2. Go to 'github.com/TesseractUnlimited/mysubs.live' and create a new pull request.
3. Make sure you have another teammate to sign off on your pull request before your merge with 'origin/master'!
4. Then if there are no merging issues you can go ahead and merge.
5. Go ahead and delete your personal branch after the merge is complete.
6. Then create a new one with the same name as your previous personal branch. This allows us to start with a fresh version of master.
###### If you have any questions or your need help let me know.
