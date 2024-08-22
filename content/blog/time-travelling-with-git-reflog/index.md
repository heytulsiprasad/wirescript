---
title: "Time Travelling with Git Reflog"
date: "2021-09-22"
description: "Using Git Reflog to time travel within git history and rescue from any git situation"
keywords: "Git Reflog, How to revert git commits"
category: "Git"
---

It's 2021 and I still used to fear before running those pesky git commands, `git reset --hard` yet another time. Each time I kept a copy of my local branch and even tried having two different projects to avoid silly shenanigans. But eventually, apart from adding tiring overhead, it made me type a bunch more keys than required which I was pretty OCD about.

Then I discovered, [git reflog](https://twitter.com/search?q=git%20reflog&src=typed_query&f=top).

### Structure:

- [Concept](#concept)
- [Usage](#usage)
- [Advanced use cases](#advanced-use-cases)
  - [Access reflogs by time](#access-reflogs-by-time)
- [Aversing risk with Reflogs](#aversing-risk-with-reflogs)
  - [Example](#example)
  - [Using Reflog to revive newer files](#using-reflog-to-revive-newer-files)
  - [Force pushing branches after rebase](#force-pushing-branches-after-rebase)
- [For more references](#for-more-references)
- [Conclusion](#conclusion)

---

# Concept

Git is very good at keeping track of changes that are happening to its HEAD. So each you do things commonly including, `git commit`, `git merge` or `git reset` it tracks it using **reference logs**.

Every time your branch tip is updated, git automatically stores a ref of that information for you. But mind that, this is temporary storage. You can only reference your history up to a certain point (~3 months) so it's not always reliable.

## Usage

It's as simple as it sounds. You can see your reflog using:

```bash
$ git reflog

3844466 (HEAD -> main, origin/main) HEAD@{0}: merge refs/remotes/origin/main: Fast-forward
f7acb57 HEAD@{1}: checkout: moving from feat-c to main
fc859f8 (origin/feat-c, feat-c) HEAD@{2}: commit: Add c
f7acb57 HEAD@{3}: checkout: moving from main to feat-c
f7acb57 HEAD@{4}: pull: Fast-forward
6932227 HEAD@{5}: checkout: moving from feat-b to main
07087ce (origin/feat-b, feat-b) HEAD@{6}: commit: add b
6932227 HEAD@{7}: checkout: moving from main to feat-b
6932227 HEAD@{8}: Branch: renamed refs/heads/master to refs/heads/main
6932227 HEAD@{10}: commit (initial): added a
```

> Note: References are local to each user, it'll only contain changes that you make on your local copy of the repository

As you can see each ref has the commit ID, we can use this to see what the state was like at that point in time and if need be, can also jump to that specific point altogether.

You can see constituents of a reference using:

```bash
$ git show HEAD@{2}

commit fc859f87f8af7e7eaea88280b8ff5c5406920581 (origin/feat-c, feat-c)
Author: Tulsi Prasad <heytulsiprasad@gmail.com>
Date:   Sat Sep 18 09:33:41 2021 +0530

    Add c

diff --git a/c.js b/c.js
new file mode 100644
index 0000000..76fbf09
--- /dev/null
+++ b/c.js
@@ -0,0 +1 @@
+console.log("c was here");
```

> Alternatively, you can either use the commit ID or relative notations of HEAD too.

More on knowing various [relative notations using HEAD](https://medium.com/@gabicle/git-ancestry-references-explained-bd3a84a0b821).

## Advanced use cases

Along with tips of HEADs, git also keeps track of stashes, other branches, tags, remotes via references too. But by default `git reflog` only shows the reflog of HEAD ref. HEAD is always the tip of the current branch.

Thus when you run, `git reflog` it implicitly means `git reflog show HEAD`.

To see reflog of the entire project, use `git reflog --all`

You can use reflogs for stash as such:

```bash
$ git reflog show stash

f0c040c (refs/stash) stash@{0}: WIP on feat-e: f0082bb add d
29e2513 stash@{1}: WIP on feat-e: f0082bb add d
```

> Note: You have to have used git stash before in your project to see the reflogs.

Similarly you can track the origin branches like this:

```bash
$ git reflog show origin/main

3844466 (origin/main) refs/remotes/origin/main@{0}: fetch origin: fast-forward
f7acb57 refs/remotes/origin/main@{1}: pull: fast-forward
6932227 refs/remotes/origin/main@{2}: update by push
```

### Access reflogs by time

Reflogs also have a time of the executed command attached to it, so you can basically leverage this to see the difference in history between any two points.

Some default time strings.

```
1.minute.ago
1.hour.ago
1.day.ago or yesterday
1.week.ago
1.month.ago
1.year.ago
```

Using them to see the diff:

```bash
$ git diff HEAD@{0} HEAD@{4.hours.ago}

diff --git a/d.js b/d.js
deleted file mode 100644
index 81fe3ac..0000000
--- a/d.js
+++ /dev/null
@@ -1 +0,0 @@
-console.log("d was here")
\ No newline at end of file
```

So this implies as reflogs keep track of all your changes to the tip, like merge, rebase, reset, etc thus all your commits are safely kept inside reflog even after you get rid of them. Although this by default stores for (~90 days), you can manually update that.

# Aversing risk with Reflogs

Now that you've known much already about conventions of reflog, now we can discuss how you can make it your safety net and use Git super-confidently all the time.

### Example

Git Reset has been the bermuda triangle of commits for me, especially when I used to copy-paste commands from StackOverflow (please don't do that).

Let's say this is my log at one point in time and for some reason I decided to go back where I had just a as only file.

```bash
$ git log --oneline

* 724281a (HEAD -> master) add d
* cf20425 add c
* e1f07f6 add b
* 4037ca4 add a

$ git reset --hard 4037ca4
HEAD is now at 4037ca4 add a

$ git log --oneline
* 4037ca4 add a
```

### **Using Reflog to revive newer files**

```bash
$ git reflog

4037ca4 (HEAD -> master) HEAD@{0}: reset: moving to 4037ca4
724281a HEAD@{1}: commit: add d
cf20425 HEAD@{2}: commit: add c
e1f07f6 HEAD@{3}: commit: add b
4037ca4 (HEAD -> master) HEAD@{4}: commit (initial): add a

$ git reset --hard HEAD@{1}
HEAD is now at 724281a add d

$ git log --oneline

* 724281a (HEAD -> master) add d
* cf20425 add c
* e1f07f6 add b
* 4037ca4 add a
```

As simple as that. 🤷‍♂️

### Force pushing branches after rebase

A few days back there was a tweet on why you should keep your branch's backup before rebasing and I instantly knew what can be done, as I was halfway through the post lol 🤣. So here's a common use case you can avoid with reflog.

{% twitter 1438869955517186052 %}

Ideally, force pushes are not recommended but when you rewrite your history (knowingly), this leaves us with this only option. However, in case this leads to breaking changes and you want your previous state of repo back, you know where I'm going with this.

Hopefully, you don't need to read anymore, if you've come all the way. I'd like you to continue when you've thought of a solution in your head.

```bash
~/Desktop/dev/git-ref (ijkl) $ git log --oneline
e4719d6 (HEAD -> ijkl, origin/ijkl) add l
87552ac add k
63841dc add j
0446b52 add i
724281a (origin/master, master) add d
cf20425 add c
e1f07f6 add b
4037ca4 add a

~/Desktop/dev/git-ref (ijkl) $ git rebase -i HEAD~4
hint: Waiting for your editor to close the file...
hint: Waiting for your editor to close the file...
[detached HEAD 1c7df0b] add ijkl
 Date: Sun Sep 19 16:56:54 2021 +0530
 3 files changed, 3 insertions(+)
 create mode 100644 i.txt
 create mode 100644 j.txt
 create mode 100644 l.txt
Successfully rebased and updated refs/heads/ijkl.

~/Desktop/dev/git-ref (ijkl) $ git push -f
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (5/5), 423 bytes | 423.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/heytulsiprasad/git-ref.git
 + e4719d6...1c7df0b ijkl -> ijkl (forced update)
```

See above, I created four commits and rebased them to squash them into one before making the PR. But I accidentally dropped a commit `add k` which had `k.txt` file in it. But I've already force-pushed the commits to remote.

```bash
~/Desktop/dev/git-ref (ijkl) $ git log --name-status -1
commit 1c7df0b3fbeb46dfafb19fb5740ecac19f1a470a (HEAD -> ijkl, origin/ijkl)
Author: Tulsi Prasad <tulsi.prasad50@gmail.com>
Date:   Sun Sep 19 16:56:54 2021 +0530

    add ijkl

A       i.txt
A       j.txt
A       l.txt
```

Now let's do some disaster management.

```bash
~/Desktop/dev/git-ref (ijkl) $ git reflog
1c7df0b (HEAD -> ijkl, origin/ijkl) HEAD@{0}: rebase (finish): returning to refs/heads/ijkl
1c7df0b (HEAD -> ijkl, origin/ijkl) HEAD@{1}: rebase (squash): add ijkl
cb62728 HEAD@{2}: rebase (squash): # This is a combination of 2 commits.
0446b52 HEAD@{3}: rebase (start): checkout HEAD~4
e4719d6 HEAD@{4}: commit: add l
87552ac HEAD@{5}: commit: add k
63841dc HEAD@{6}: commit: add j
0446b52 HEAD@{7}: commit: add i
724281a (origin/master, master) HEAD@{8}: checkout: moving from master to ijkl

~/Desktop/dev/git-ref (ijkl) $ git reset --hard HEAD@{4}
HEAD is now at e4719d6 add l

~/Desktop/dev/git-ref (ijkl) $ git log --oneline
e4719d6 (HEAD -> ijkl) add l
87552ac add k
63841dc add j
0446b52 add i
724281a (origin/master, master) add d
cf20425 add c
e1f07f6 add b
4037ca4 add a
```

This is how you can get your most important `k.txt` file back and leave work each day like an absolute winner. 😅

# For more references

- For more tragic [fuckups](https://ohshitgit.com/)
- Atlassian has a nice article on [reflog](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog) too

# Conclusion

Not all disasters can be avoided but knowing the ones that can is better than nothing. This reminds me of a quote from Picasso, “Learn the rules like a pro, so you can break them like an artist”. Tweet me your favorite git tricks that saved your day for real. You'll find me [@thebuildguy](https://twitter.com/thebuildguy/) on Twitter.

_Huge thanks to [Sreetam Das](https://twitter.com/_SreetamDas), [Pratham Krishna](https://twitter.com/PrathamKrishna3), and [Aditya Raj](https://twitter.com/ExplorerAadi) for reviewing this post beforehand, it really helped to make this post better._
