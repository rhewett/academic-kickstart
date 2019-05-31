---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Weight-adjusted discontinuous Galerkin methods: wave propagation in heterogeneous media"
authors: ["Jesse Chan", rjh, "T. Warburton"]
date: 2017-12-12T00:00:00-00:00
doi: "10.1137/16M1089186"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "SIAM Journal on Scientific Computing"
publication_short: "SISC"

abstract: "Time-domain discontinuous Galerkin (DG) methods for wave propagation require accounting for the inversion of dense elemental mass matrices, where each mass matrix is computed with respect to a parameter-weighted $L^2$ inner product. In applications where the wavespeed varies spatially at a subelement scale, these matrices are distinct over each element, necessitating additional storage. In this work, we propose a weight-adjusted DG (WADG) method that reduces storage costs by replacing the weighted $L^2$ inner product with a weight-adjusted inner product. This equivalent inner product results in an energy-stable method but does not increase storage costs for locally varying weights. A priori error estimates are derived, and numerical examples are given illustrating the application of this method to the acoustic wave equation with heterogeneous wavespeed."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

links:
- name: arXiv
  url: https://arxiv.org/abs/1608.01944
  icon_pack: ai
  icon: arxiv
- name: scholar
  url: https://scholar.google.com/scholar?cluster=17076219506620508063
  icon_pack: ai
  icon: google-scholar

url_pdf: "https://epubs.siam.org/doi/pdf/10.1137/16M1089186"
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
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

math: true
---
