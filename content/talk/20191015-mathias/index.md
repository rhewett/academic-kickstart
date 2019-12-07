---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "L-sweeps: A scalable parallel high-frequency Helmholtz solver"
event: Total MATHIAS 2019
event_url:
location: Paris, France
summary:
abstract: We present the first fast solver for the high-frequency Helmholtz equation that scales optimally in parallel, for a single right-hand side. The L-sweeps approach is based on the well-established method of polarized traces, but considers a checkerboard domain decomposition instead of a layered decomposition. In particular, we extend the notion of accurate transmission conditions to checkerboard domain decompositions and introduce a new sweeping strategy. The progression of a wave is still captured in a single sweep, and the notion of accurate transmission conditions is properly extended to this context. This precaution effectively decouples the cells at the front of the sweep, and results in a much more favorable parallel performance than previously published in the literature. The method has an overall O(N log^2 w/p) empirical runtime for N=n^d total degrees-of-freedom in a d-dimensional problem, frequency w, and p~n processors.  We introduce the algorithm and provide a complexity analysis for our parallel implementation of the solver. We corroborate all claims considering several two- and three-dimensional numerical examples involving constant, smooths, and discontinuous wave speeds.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2019-10-15
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
url_slides:

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
