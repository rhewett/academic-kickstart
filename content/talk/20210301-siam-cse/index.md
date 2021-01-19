---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A Linear Algebraic Framework for Distributed Deep Learning"
event: SIAM Conference on Computational Science & Engineering (CSE21) 
event_url: https://www.siam.org/Conferences/CM/Conference/is20
location: Online @ SIAM CSE 21
summary:
abstract: Training deep neural networks (DNNs) in large-cluster computing environments is increasingly necessary, as networks grow in size and complexity. Local memory and processing limitations require robust data and model parallelism for crossing compute node boundaries. We present a linear-algebraic approach to model parallelism in deep learning, which allows parallel distribution of any tensor in the DNN. Rather than rely on automatic differentiation tools, which do not universally support distributed memory parallelism models, we use the fact that operations on a computer's memory are linear to build a suite of parallel data movement operations, e.g., broadcast, sum-reduce, and halo exchange, which are also linear operators. Thus, we can develop the adjoint operators required for gradient-based training of DNNs. We build distributed DNN layers using these parallel primitives, composed with sequential layer implementations, and demonstrate their application by building and training a distributed DNN using DistDL, a PyTorch and MPI-based distributed deep learning toolkit.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2021-03-01
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
