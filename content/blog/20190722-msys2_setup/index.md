---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Msys2 Setup for a Usable Windows Command line"
subtitle: ""
summary: "Or, how I eat my cake and have it too."
authors: [rjh]
tags: ["tools"]
categories: []
date: 2019-07-22T20:23:39-04:00
lastmod: 2019-07-22T20:23:39-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Let me start this by saying I am generally fairly tool agnostic.  The right tool for the job is often the tool that is present.  Holy wars generally don't serve any group well.

When Linux is the right development environment, for example, for high-performance codes, then Linux is the right development environment.

For web browsing, e-mail, and games, there is no reason to fight Linux on a laptop, Windows 10 is perfectly usable and stable.

I strongly separate work from home use, so I don't use personal tools for hardcore development.  Consequently, a Windows laptop is all I really need.

That said, occasionally I need to script something or to do some data analysis, or if I want to do some web development (Hugo Academic back-end work), I do need a command line.  I don't know PowerShell and of course, the Windows command line is hot garbage.

Fortunately, Windows users have many ways to access Posix-compliant shells.  The Linux subsystem for Windows is a huge improvement on older tools, like Cygwin, but I'm not as familiar with it and it might be a little heavy weight for my needs.  I've used mingw before, for other development tasks (building C++ codes in Python before Anaconda started shipping Visual Studio based tools), but the environment always felt a little hacky and was always a 32-bit tool.

Enter Msys2.  Msys is perfect for my needs.  It has 64-bit build, has a community that keeps the environment up to date, is light-weight, and most importantly, just plain works.  I need to run git.  I need to run IPython.  I need to do these things without Linux, because I want to do other things too.  I just want to have `ls` and `pwd` and my comfortable bash environment.  Msys2 allows me to both have my cake and eat it.

Because there are a few things that need to be setup on install, the entire reason this post exists is so that I can replicate my install when needed.

I based many steps on these source:

* https://github.com/valtron/llvm-stuff/wiki/Set-up-Windows-dev-environment-with-MSYS2
* https://medium.com/@amsokol.com/how-to-build-and-install-tensorflow-gpu-cpu-for-windows-from-source-code-using-bazel-d047d9342b44
* https://www.math.ucla.edu/~wotaoyin/windows_coding.html

Also, before I found the actual Msys2 installer, I had installed the (Git for Windows SDK)[] and got used to some of its configurations.  I couldn't find a Git repo or anything to share these files, so I include them here for download.  If anyone can tell me where they are sources from I'm happy to refer to them directly.

1. [Download and Install Msys2](https://www.msys2.org/).  Get the 64 bit version.  Follow the installation and update directions.  I generally install it to `C:\msys64`, but anywhere is fine.

2. Fix the home directory, following the directions [here](https://github.com/valtron/llvm-stuff/wiki/Set-up-Windows-dev-environment-with-MSYS2#set-up-home).  The following is quoted from that source:

    > By default, msys will use /c/msys64/home as your home folder. If you want to use your existing home folder, set a `$HOME` env variable under "Environment Variables > User variables", add `HOME -> %USERPROFILE%`
    
    > Then edit `/c/msys64/etc/nsswitch.conf` to set `db_home: /%H`.
    
    > Also, SSH insists on using MSYS' `/home`, but you can get around that by adding this line to `/etc/fstab`: 
    
    > `C:/Users /home ntfs binary,noacl,auto 1 1`

3. Download and copy the following files to `C:\msys64\etc\profile.d`.  These are sourced from an installation of the Git for Windows SDK, which uses a stripped down version of Msys2.
    * [`aliases.sh`](files/aliases.sh)
    * [`bash_completion.sh`](files/bash_completion.sh)
    * [`bash_profile.sh`](files/bash_profile.sh)
    * [`env.sh`](files/env.sh)
    * [`git-prompt.sh`](files/git-prompt.sh)

4. Set Msys2 to inherit your Windows path variable.  This is important if you have Windows native tools like Anaconda, go, or Hugo in your path.  This is where Msys is a little bit tricky.  There are multiple launchers and it is important to select the right one for your needs.  For me, the pure POSIX compliant shell is all I need, as I am not building native apps.  Uncomment, or set, `MSYS2_PATH_TYPE=inherit` in `C:\msys64\msys2.ini`.  If you use the mingw32 or mingw64 launchers, set this in their `.ini` files too.  For this to work, you have to launch the shell from `C:\msys64\msys2.exe`.  I create a shortcut to this.

5. Install a variety of tools, as needed for work.  For me this is at least git, gcc, make, CMake, etc.  I forget the general list, but you will be reminded whem missing things.

    `pacman -s git gcc base-devel cmake vim`

6. To install MPI, follow the directions here: https://www.math.ucla.edu/~wotaoyin/windows_coding.html

   Edit Jan 21, 2021: Unfortunately, that page doesn't exist anymore.  It is available through the wayback machine: https://web.archive.org/web/20190403075443/http://math.ucla.edu/~wotaoyin/windows_coding.html

7. Install winpty (`pacman -S winpty`) to fix color and tab completion in ipython (https://bugs.python.org/issue34091)
