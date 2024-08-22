---
title: "Top 5 things about Git learnt after I started working as a developer"
date: "2023-10-11"
description: "Git commands that I learnt when I started working with bigger teams and learnt how to manage code properly"
keywords: "Git, Top 5 git commands"
category: "Git"
---

Git is one of those things in software development, no one will tell you to use it but once you start working with a team or a company there’s no escape from Git. There’s no other concept which will be more useful than learning the ropes with Git, because it’ll be your saviour when you need it.

### Disclaimer ⭐

If you’ve never heard of Git before, in simple words, it is used to work collaboratively. When we work on a big project multiple people need to contribute to a single codebase, for which we can use different branches on Git, or we can manage our codebase using commits, code merging and many more advanced stuff.

Note: However if you’re complete new to Git, I’d recommend you go through this [10 Important Git Commands that Every Developer Should Know](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/) post on freeCodeCamp to know the basics.

## ✍️ How did I learn this?

Well there’s no easy answer. I had this habit of [keeping a daily work journal](https://blog.isquaredsoftware.com/2020/09/coding-career-advice-daily-work-journal/) which I picked from [Mark Erikson](https://blog.isquaredsoftware.com/about/) (the maintainer of [Redux](https://redux.js.org/)), in that mostly I’d write what features I worked on that day or bugs that scratched my itch. It really helped me look back on things I’ve learnt and write better documentation.

However I observed that 90% of the issues related to code management could be solved by Git which will reduce our time usage and increase productivity. Hence I started maintaining a list of useful Git commands which you’re going to read right now.

## Getting Started

Like always we’re going to start from a starter repo, in order to be on the same page. You can use it as a playground to get your hands dirty. All thanks to [W3Schools](https://www.w3schools.com/w3css/w3css_templates.asp) for sharing this amazing templates! 🙌

{% embed https://github.com/heytulsiprasad/git-top-skills %}

![UI of the project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jyxy0e16wjsz3f2baobz.png)

## 1️⃣ Git Reset

Imagine a situation where you’re working on a new feature and before commiting to the repo you forgot to remove your debugging comments from your files. Now everywhere you can see `console.log("Hi bros")` in the browser. 😅

{% embed https://twitter.com/abhagsain/status/1710941362479104406 %}

Yes you can remove them and create a new commit as well, but what if you want to remove those lines in the previous commit itself? Here comes, Git Reset to rescue.

```bash
@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git log

commit 3d910a2debdf03ce57b22e97b5988c07a2c3437a (HEAD -> learn/reset, origin/learn/reset)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:20:22 2023 +0000

    add comments

commit ae3d4cdd9e95f0da434e2be32a61addd824d633e (origin/main, origin/HEAD, main)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:14:20 2023 +0000

    feat: add script to populate blogs
```

Git Reset basically provides us a way to rewrite (or reset) our history as per our convinience. It comes with three modes depending on your usecase.

1. `--soft`
2. `--mixed`
3. `--hard`

### 1. `git reset --soft`

This basically moves back to the specified commit and your changes remain staged and ready to be commited again. If you want to make any changes you can do them but don’t forget to add (stage) those changes before commiting again.

Examples: `git reset --soft faf864e`, or `git reset --soft HEAD~2` (if you want to jump back 2 commits)

```bash
@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git reset --soft HEAD~1

@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git status
On branch learn/reset
Your branch is behind 'origin/learn/reset' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   main.js

@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git log
commit ae3d4cdd9e95f0da434e2be32a61addd824d633e (HEAD -> learn/reset, origin/main, origin/HEAD, main)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:14:20 2023 +0000

    feat: add script to populate blogs
```

As you can see the last 1 commit is removed, but it’s changes are still in staging area.

### 2. `git reset --mixed`

This is the default option. When you run this, you basically undo your commits and unstage your changes to your current working directory. After running this you can continue working on your specified commit and when you’re done you can commit those changes using git commit.

Examples: `git reset faf86fe` or `git reset --mixed HEAD~12` (as mixed is default you don’t have to include the option)

**💡 Pro tip:** If you’ve accidentaly staged your changes using `git add .` but decided to not add all of them, you can use `git reset` to unstage all changes that are in current staging area. Later you can add files of your choice using `git add <filename>`

```bash
@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git log
commit 002f538b56529178e31f7042d7bb7a1e7ec18427 (HEAD -> learn/reset)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:28:25 2023 +0000

    add more comments

commit 120c7ddf4d56d93f49186758756e091748aedc59
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:25:38 2023 +0000

    add comments

commit ae3d4cdd9e95f0da434e2be32a61addd824d633e (origin/main, origin/HEAD, main)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Tue Oct 10 08:14:20 2023 +0000

    feat: add script to populate blogs

@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git reset --mixed ae3d4cdd9e95f0da434e2be32a61addd824d633e
Unstaged changes after reset:
M       main.js

@heytulsiprasad ➜ /workspaces/git-top-skills (learn/reset) $ git status
On branch learn/reset
Your branch is behind 'origin/learn/reset' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   main.js

no changes added to commit (use "git add" and/or "git commit -a")
```

### 3. `git reset --hard`

If you ever want to discard all the changes in few commits entirely, you can use `--hard`. This shifts the HEAD pointer to the specified commit and completely discards all the changes made till then, in both the staging area and working directory. This is a very powerful option so use it very carefully, because it deletes the commits permanently.

Example: `git reset --hard faf86e` or `git reset --hard HEAD~3` (removes last three commits). In the below example, we’re removing all our log commits using hard reset.

```bash
~/Desktop/Triage/dev/git-top-skills (learn/reset) $ git log --oneline
9130158 (HEAD -> learn/reset) add more and more console logs
0e68a20 (origin/learn/reset) add all logs
ae3d4cd (origin/main, origin/HEAD, main) feat: add script to populate blogs
bf96bfb feat: add starter files
9017ea7 Initial commit

~/Desktop/Triage/dev/git-top-skills (learn/reset) $ git reset --hard HEAD~2
HEAD is now at ae3d4cd feat: add script to populate blogs

~/Desktop/Triage/dev/git-top-skills (learn/reset) $ git log --oneline
ae3d4cd (HEAD -> learn/reset, origin/main, origin/HEAD, main) feat: add script to populate blogs
bf96bfb feat: add starter files
9017ea7 Initial commit
```

💡 **Pro tip:** If you ever did some changes in your local or don’t know what’s missing and want to bring your working directory back to how it is in the remote repo (on GitHub), then you can first run:

`git fetch origin` this fetches latest changes from remote without modifying your local working directory, next reset your local branch to match the remote branch using, `git reset --hard origin/main`; You can replace `main` with the branch you want to match it with.

Note: It discards any local changes you’ve made.

**Tip:** If you ever want to recover your `git reset` commits which are permanently lost, git preserves the changes that are happening to it’s HEAD using reference logs. You can basically recover them using `git reflog` but don’t be too reliant on it. To know how, check out my blog on it.

{% embed https://dev.to/thebuildguy/time-traveling-with-git-reflog-2f15 %}

## 2️⃣ Git Stash

This is a magical command and you’ll be surprised how much you’ll use this at workplaces. Imagine you’re working on a branch locally (dev) and suddenly there is another bug on master which you need to solve on priority, but your local branch already contains some changes which are not commit ready, what do you do? Git stash is your savior.

Git stash, temporarily puts away your changes made to working directory in a branch, without having to commit them. You can stash your changes and go work on some other branch and come back and apply your saved stash and continue working from there.

- To save your changes into the stash with a default name: `git stash`
- To give a particular name to your stash: `git stash save -m "your stash name"`
- You can check all existing stash with this command: `git stash list`
- To retrieve the stash again (this will apply the latest stash): `git stash apply stash@{0}`
- Remove a stash entry from stash list: `git stash drop <stash_id>`
- Remove all stashes using: `git stash clear`

```bash
~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git status
On branch learn/stash
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
        modified:   main.js

no changes added to commit (use "git add" and/or "git commit -a")

~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git stash save -m "add more blogs with media"
Saved working directory and index state On stash: add more blogs with media

~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git stash list
stash@{0}: On stash: add more blogs with media
```

However `git stash apply` will only apply the stash but not remove it from stash list. If you want to remove the entry, use stash pop instead.

```bash
~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git stash apply stash@{0}
On branch learn/stash
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
        modified:   main.js

no changes added to commit (use "git add" and/or "git commit -a")

~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git stash list
stash@{0}: On stash: add more blogs with media
```

By default stash will save both staged and unstaged files, in order to stash just staged files just do `git stash --keep-index`

**💡 Pro tip:** To apply the last made stash you can do (this also removes stash from stash list): `git stash pop`

```bash
~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git stash pop
On branch learn/stash
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
        modified:   main.js

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (2669f29b4f44ce1d48c9309196361f4efbd94449)
```

## 3️⃣ Interactive Rebase

In Git, rebasing basically means to move any commit or sequence of commits to a new base commit (or update its base). It can be used in two different modes: manual or interactive. You might ask why do we need rebase if we can simply do a git merge instead?

Imagine a scenario you’ve two branches, master and internal. Internal is a feature branch created from master. And while you were working there have been certain bug fixes that are directly pushed to master and now you need those fixes in internal. So, what do you do now?

![Rebasing of commits](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/na3egrjro8cn8x9yxt4e.png)

In this case, we can rebase our `internal` branch with `master` branch (after fetching all pushes to master from remote) in order to get those latest code in internal. Before you do rebase you should always commit your latest work, as rebase basically rebases your commits. Now you can happily work in internal which also includes those new commits from master later you can push to master when your feature is ready! 🎉

![State of commits after rebase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5sjjkkdv730j1wdqnp2p.png)

The code for the above action would be:

```bash
git checkout internal
git fetch origin master
git rebase master # you may face merge conflicts depending on code
git push origin internal
```

The above is a simple rebase example. Now, let’s see what the heck is an interactive mode?

### Under the hood of rebase

Whenever we do rebase in a branch, it takes those sequence of commits and under the hood creates new commits and places them upon a new branch. Hence if you’re pushing your commits to remote, when you do a rebase you might get an error as your commit ids have changed in local. Hence, you might have to do a force push. `git push -f`

**Note:** Do not force push if other people are also working on same branch, you might overwrite someones code accidentally.

### Tell us what an interactive rebase is then?

Ofcourse! So whenever you’re working on a feature you can do temporary commits which you don’t want to be visible on your main branch’s history. So what do you do now? You cannot revert those commits right, as `git revert` basically creates another commit.

![Example of GitHub PR](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v5k3mq8x7rmw2gxrjhe7.png)

Hence comes, `git rebase --i <commit_id>` 🧑‍💻

1. First check the git log to get the actual commit id

```bash
~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git log --oneline
e7cd367 (HEAD -> learn/stash, origin/learn/stash) feat: add random photos to blog posts
a664717 plz work
d592e77 remove space
6bfe89b remove useless comments
8e6e68c feat: add more blogs
ae3d4cd (origin/main, origin/HEAD, main, learn/reset) feat: add script to populate blogs
bf96bfb feat: add starter files
9017ea7 Initial commit

```

2. Now run the interactive rebase command and provide the commit id of the root commit above which you want to rebase the branch.

```bash
~/Desktop/Triage/dev/git-top-skills (learn/stash) $ git rebase -i ae3d4cd
hint: Waiting for your editor to close the file...
```

As said, you’ll see your editor open a file which we’ll make changes to.

![Git Interactive Rebase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/45uyooctoxmlzq9a1neq.png)

You can **squash** the commits if you want to discard the commit but preserve it’s contents, or **reword** if you want to rename your commits and **pick** will preserve the commit. All the operations are listed in the screenshot.

3. Added the necessary changes.

![Rebase interactive](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ub9cu5q3ipxa690sgc6x.png)

4. Close the file after editing. Now you’ll get to do the operations in new opening files and after you edit close all of them. This is my final screen, you can update your final rebase comment now.

![Commit edit screen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vfkt0lyhi5s3pp4tg1r8.png)

Once it’s done you’ll get a message in console like:

```bash
Date: Tue Oct 10 19:41:55 2023 +0530
 1 file changed, 13 deletions(-)
Successfully rebased and updated refs/heads/learn/stash.
```

And if you do git log now, you’ll see the changes you made.

![Git log in oneline mode](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f0t8fwm3b9dooa845jt8.png)

**Note:** To push the changes to our PR, we need to do a force push as we’ve an entirely different history of commits now

![Git push error after rebase](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rkhdbvq3cc27p20zyvin.png)

Run: `git push -f`

Now we can see our history is cleared in the PR. 🙌

![GitHub PR after force push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ksy5wci3yykr6q1icqb.png)

Even while merging a PR in GitHub we can do:

1. Create a merge commit
2. Squash and merge
3. Rebase and merge

We used the **rebase and merge** to merge, and this way we avoided any mysterious merge commits on main branch which included entire feature code.

Now you can see all our feature commits inside main branch history, as it’s merged by rebase instead of the usual merge commit.

![Commit history after rebase and merge](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3c3u3ky0wvxyv5w9s1p7.png)

## 4️⃣ Git Cherry Picking

This is a powerful tool under your toolbelt. Git cherry pick is used to pick the specified commit and put it in your working directory without having to merge or rebase the entire branch. I know it sounds like a hack, but trust me you’re going to love it.

Imagine your working on a feature branch and you find a bug that affects your main branch and your boss insists you fix the bug before working on anything else. Now, you’ve already fixed the bug and commited on your feature branch. Do you merge your half made feature branch or fix the bug again after checking out to main branch?

Easy. Use Git Cherry Pick. 🍒

For example: We’re adding a popular posts section to our blog in a new branch and we decided to ship the popular post commit to main first then continue working more on the feature.

![Popular posts UI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dory0vnz8x7nhf00bvfb.png)

This is how we’ll do it.

```bash
git checkout -b learn/cherry-pick # b stands for create new branch

# add code and commit your code
~/Desktop/Triage/dev/git-top-skills (learn/cherry-pick) $ git commit -m "feat: add posts to popular post section"
[learn/cherry-pick 7dd2a8e] feat: add posts to popular post section
 2 files changed, 9 insertions(+), 11 deletions(-)

# checkout to main branch
git checkout main

~/Desktop/Triage/dev/git-top-skills (main) $ git cherry-pick 7dd2a8e
[main 8490a61] feat: add posts to popular post section
 Date: Tue Oct 10 20:59:57 2023 +0530
 2 files changed, 9 insertions(+), 11 deletions(-)

# we can see 7dd2a8e commit has been added to main with a new commit id
~/Desktop/Triage/dev/git-top-skills (main) $ git log --oneline
8490a61 (HEAD -> main) feat: add posts to popular post section
94bd178 (origin/main, origin/HEAD) feat: add random photos to blog posts
```

It will pick the specific bug fix commit from your feature branch and put that in your main branch.

**Tips:**

- Use `-edit` option if you want to update the commit message while cherry picking.
- Use `--no-commit` option to just move the changes of the specified commit into the working directory and not commit.
- Use `--signoff` option to add a signature line to end of cherry pick commit message. 🧑‍💻

## 5️⃣ Searching for code

Pretty much half my adult life must have gone into finding the right part of the code, if not more. 😅 So don’t make the same mistake as me, as Git makes pretty much easy to look through your code. There are times you want to filter the commits by author or the commits that are made between a specific dates, you can use these options to find out the files.

**💡 Pro Tip:** You can use the `- num` option to specify the exact number of commits you want to show.

### **More ways to filter commit history:**

1. **By Date**

If you want to show your commits by the date they were made, you can use this option. It’s simply writing `git log --after="YYYY-MM-DD"` and it’ll output the desired logs. The below code only will output 2 logs as we’ve passed a new parameter.

![Git Log with after](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n5olmbkon1q53eim83vw.png)

**Notice:** You can also pass `--after` and `--before` commands together to give a range of commits and also the date value can be relative as in: `git log --after="yesterday"` also works.

2. **By Author**

You can pass `git log --author="<name>"` and it’ll return a list of all commits made by those person. Even if it’s not exact match, it just needs to contain the specified word.

![Git Log with Author](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tfob80m2c0trzjuh6y0z.png)

3. **By Commit Message**

Just like author, you can use `--grep` option to pass any value to match it with commit message. Example: In the below command, we’re filtering two feature commits made by Tulsi.

![Git log with grep and author](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sptaqgfx7q0er1wawsiq.png)

4. **By File path**

Sometimes you need to find the commits that made changes to specific files, hence it will come in handy.

Use: `git log -- filename`

The following code returns the commit that makes changes to [README.md](http://README.md) file, the `--` denotes that the subsequent parameters are not branch names.

![Git log by file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vgwty4jqkxl4rce63glt.png)

5. **By Branch**

If you want to check what commits are there in some branch and not in other, you can use this syntax.

Use: `git log branchA..branchB`

The following code returns the commits that are there in `learn/cherry-pick` branch but not in `main`. So remember it as, the difference in commits from branch B to branch A.

![Difference between branches using git log](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4gdcz8op5ua96mf97rq.png)

## ✨ Bonus: Showing commits beautifully

We can understand the state of our repository through `git log` and for better understanding and quick access there are certain options you can make use of.

1. `git log --oneline` : Returns the output in a single line and commit id
2. `git log --graph` : Draws an ASCII graph representing the branch structure in commit history
3. `git log --decorate`: Decorates the git log output

You can use all of these options together to get the best results and also use `--all` option if needed to see commits across all branches.

![Git log with pretty formatting](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x4r63333pnmyvzdgptlv.png)

**💡 Pro Tip**: You can also make an custom alias in your terminal as `git adog` in order to run this command every time you want to view git history.

## 📕 Additional Reading

1.  [Atlassian’s Advanced Git Tutorials](https://www.atlassian.com/git/tutorials/advanced-overview)
2.  [Using Git for Version Control Effectively](https://blog.isquaredsoftware.com/2021/01/coding-career-git-usage/) by [@acemarke](https://twitter.com/acemarke)
3.  [The Advanced Git Guide](https://www.toptal.com/git/the-advanced-git-guide) by Toptal

## 🏳️ Conclusion

Git is going to be a very essential part of your work life, if not already! I really believe you’ll be a pro using these git commands and absolutely certain your life will be 10x if not 100x easier when you master these concepts and use them daily in your workflow.

Let me know in the comments what other git commands have you used the most till date. 😼

![Until next time](https://media.giphy.com/media/zDpYQooxkwXkAWMxRK/giphy.gif)

_I’m [@thebuildguy](https://twitter.com/thebuildguy) on Twitter, shoot me a DM if you’ve got any questions!_ 👋
