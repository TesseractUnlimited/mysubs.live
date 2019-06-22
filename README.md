# mysubs.live
### Repo for Tesseract Unlimited's mysubs.live

#### How to update 'master' branch properly:
1. Commit all your changes to your personal branch and sync up to your 'origin/<branch_name>'.
2. Go to project root directory and run `git checkout master`.
3. Then run sync up your local 'master' branch with our 'origin/master' branch
### WARNING: There should be no changes going from your local 'master' branch to our 'origin/master' branch! All your work should have been done on your local branch. The only thing that should be changing is your local 'master' branch.
4. Now run `git checkout <branch_name>`.
5. Then run `git merge master`.