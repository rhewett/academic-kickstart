---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Msys2 Setup"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2019-06-28T20:23:39-04:00
lastmod: 2019-06-28T20:23:39-04:00
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

Some guides:
https://github.com/valtron/llvm-stuff/wiki/Set-up-Windows-dev-environment-with-MSYS2
https://medium.com/@amsokol.com/how-to-build-and-install-tensorflow-gpu-cpu-for-windows-from-source-code-using-bazel-d047d9342b44
https://www.math.ucla.edu/~wotaoyin/windows_coding.html

1. Install Msys2
2. Follow directions to set home directory correctly (above)
3. Copy the files in `files` to `C:\msys64\etc\profile.d`
4. Install winpty (`pacman -S winpty`) to fix ipython (https://bugs.python.org/issue34091)
5. Point ssh to the correct place