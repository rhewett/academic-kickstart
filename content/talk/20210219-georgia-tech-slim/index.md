---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A Linear-algebraic Approach to Distributed Deep Learning"
event: SLIM Seminar 
event_url: 
location: Online
summary:
abstract: Training deep neural networks (DNNs) in large-cluster computing environments is increasingly necessary, as networks grow in size and complexity. Local memory and processing limitations require robust data and model parallelism for crossing compute node boundaries. We propose a linear-algebraic approach to domain decomposition in deep learning, which allows parallel distribution of any tensor in the DNN. Rather than rely on automatic differentiation tools, which do not universally support distributed memory parallelism models, we show that parallel data movement operations, e.g., broadcast, sum-reduce, and halo exchange, are linear operators, and by defining the relevant spaces and inner products, we manually develop the adjoint, or backward, operators required for gradient-based training of DNNs. We build distributed DNN layers using these parallel primitives, composed with sequential layer implementations, and demonstrate their application by building and training a distributed DNN using DistDL, a PyTorch and MPI-based distributed deep learning toolkit.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2021-02-19
# date_end: 2019-08-27T19:28:36-04:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2021-02-19T19:28:36-04:00

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
projects: ["distdl"]
---
