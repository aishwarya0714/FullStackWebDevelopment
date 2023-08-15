# Git Github and Version Control 🚀

# 1. Version Control

Let's learn Version control step by step 💡

1. Go to terminal in VS code
2. create new directory
   - mkdir Story
3. Go inside your directory
   - $ cd Story/
4. Now create one Chapert1.txt file
   -$ touch Chapter1.txt
5. Open file in VS code and write something inside that
   - $ code Chapter1.txt
6. Now initiate git repository
   - $ git init
7. to check your git repository
   - $ ls -a
     -a shows all hiden files
8. at this stage your file is in working directory, we need to add it in staging area, for that first will check the status-
   - $ git status
--------------------------------------
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)     
        Chapter1.txt

nothing added to commit but untracked files present (use "git add" to track)
  
 ---------------------------------------

will get output like this, means our file is still in working directory not in staging area.

9. Now to start traking changes in our file we use following command
    - $ git add Chapter1.txt
10. Now, we again check status
    - $ git status
-------------------------------------------------
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   Chapter1.txt

----------------------------------------------------

So, our file is now in staging area.

11. to commit our changes we use-
    - $ git commit -m "Comlpete Chapter 1"
12. to check commit changes
    - $ git log

13. Now, create 2 more files by following step 4,5.
14. Add these files into staging area by using-
    - $ git add .
      . will add all directory in one go.
15. Verify git status-
    - $ git status
16. Now, check your commits-
    - $ git log
        at this time it will include all your commits
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
