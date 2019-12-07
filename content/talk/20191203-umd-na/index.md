---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Evolution of a Scalable 3D Helmholtz Solver with Geophysical Applications"
event: University of Maryland Department of Mathematics Numerical Analysis Seminar
event_url:
location: University of Maryland, College Park, MD, USA
summary:
abstract: While it is theoretically and computationally advantageous to pose the inverse problem of subsurface recovery in the frequency domain, efficiently solving time-harmonic wave equations, the associated forward problem,  in parallel, remains challenging for large 3D problems at high-frequency and in heterogeneous media.  In this talk, I present an overview of our development of parallel implementations of effective solvers for this regime, built using the method of polarized traces.  In particular, I will focus on the challenges of extending the already efficient 2D method to 3D while maintaining parallel scalability.  I will show some recent results on applications to highly heterogeneous media in 3D.  I will also introduce our variant of polarized traces, the L-sweeps method, which allows us to solve the 3D Helmholtz equation in parallel with sub-linear scaling

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2019-12-03
# date_end: 2019-08-27T19:28:36-04:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2019-12-07T00:00:00-04:00

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
projects: []
---
