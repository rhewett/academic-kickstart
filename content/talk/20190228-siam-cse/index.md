---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Fast and Scalable Solvers for High-frequency Wave Propagation"
event: SIAM Conference on Computational Science and Engineering (CSE19) 
event_url: https://www.siam.org/Conferences/CM/Conference/cse19
location: Spokane, WA, USA
summary:
abstract: In this talk, I will review recent progress on fast solvers for the high-frequency Helmholtz equation. The problem is harder than in the elliptic case, and the better answers seem to involve a decomposition into polarized waves. I will describe how the method of polarized traces fits in this framework, and how it can be adapted to lead to a complexity that is sub-linear in both the number of volume unknowns and the number of right-hand sides, in the 3D case, in a parallel environment. Joint work with Laurent Demanet, Matthias Taus, Adrien Scheuer, and Leonardo Zepeda. 

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2019-02-28
# date_end: 2019-08-27T19:28:36-04:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2019-08-27T19:28:36-04:00

authors: []
tags: []

# Is this a featured talk? (true/false)
featured: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

# Optional filename of your slides within your talk's folder or a URL.
url_slides: slides.pdf

url_code:
url_pdf:
url_video:

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [helmholtz]
---
