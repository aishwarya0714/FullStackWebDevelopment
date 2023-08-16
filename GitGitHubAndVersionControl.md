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
### " We created file inside your directory, working directory is the folder or directory where you initialize your git repository. then we used git add to push it into staging area. Now the reason why there is this intermediate staging are beacause you might wonder why not just go from the working directory straight to the repository? why do we need this extra step?
### well, Sometimes you might not want to add all of your files to be tracked or all of your files to be commited, So the stating area is a good place to try and figure out what are the things that you want git to ignore and what are the things you want to be tracked at once. then we commit this to the git repo.
### So now, our file is inside our local repository and that version is given a name through the commit message.
### So, that means that even if we've messed up our file, we can still use the last version thats under version control and we can use a special command called Git Checkout to revert back or roll back to the last position in our local repository." 

17. now we make change in any one of the file and then hit the git status command, ehich will show us that this file is modified
    
  <img width="391" alt="image" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/6dc76735-df27-41e4-9c7f-feafd59e5325">

18. now we chaek differen in modification
    - $ git diff Chapter3.txt
19. we rollback changes
    - $ git checkout Chapter3.txt

* command to remove all files from staging area:

      - $ git rm --cached -r .

--------------------------------------------------------------------

# Gitignore 💡

lets learn git ignore step by step

1. create one directory and some files in that with one file named as secret.txt
2. now create one .gitignore file inside your directory
   - this file will contain the file names which we want to ignore to commit.
     - SO, when we add files in staging area that perticulaer file will ignored.
     - here secret.txt is our file which we want to ignore so we write its name in .gitignore
     - after git add . will add all file is staging area except secret.txt
     - will see git status
       
       <img width="270" alt="image" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/30f4c981-2017-4095-9ea5-32d6e1f29088">
       


