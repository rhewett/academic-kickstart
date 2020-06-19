---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "A Linear Algebraic Approach to Model Parallelism in Deep Learning"
authors: [rjh, Thomas Grady]
date: 2020-06-04
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2020-06-01T00:00:00-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Arxiv.Org"
publication_short: "Arxiv.Org"

abstract: "Training deep neural networks (DNNs) in large-cluster computing environments is increasingly necessary, as networks grow in size and complexity. Local memory and processing limitations require robust data and model parallelism for crossing compute node boundaries. We propose a linear-algebraic approach to model parallelism in deep learning, which allows parallel distribution of any tensor in the DNN. Rather than rely on automatic differentiation tools, which do not universally support distributed memory parallelism models, we show that parallel data movement operations, e.g., broadcast, sum-reduce, and halo exchange, are linear operators, and by defining the relevant spaces and inner products, we manually develop the adjoint, or backward, operators required for gradient-based training of DNNs. We build distributed DNN layers using these parallel primitives, composed with sequential layer implementations, and demonstrate their application by building and training a distributed DNN using DistDL, a PyTorch and MPI-based distributed deep learning toolkit."

# Summary. An optional shortened abstract.
summary: "We present a linear algebraic model for distributed deep learning."

tags: []
categories: []
featured: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: arXiv
  url: https://arxiv.org/abs/2006.03108
  icon_pack: ai
  icon: arxiv

url_pdf: "https://arxiv.org/abs/2006.03108.pdf"
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Center"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [distdl]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
