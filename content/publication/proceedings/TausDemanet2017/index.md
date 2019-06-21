---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "Pollution-free and fast hybridizable discontinuous Galerkin solvers for the high-frequency Helmholtz equation"
authors: [Matthias Taus, Laurent Demanet, Leonardo Zepeda-Núñez, rjh]
date: 2017-08-17
doi: "10.1190/segam2017-17728116.1"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "SEG Technical Program Expanded Abstracts 2017"
publication_short: "SEG 2017"

abstract: "In this work we propose a hybridizable discontinuous Galerkin (hdG) discretization of the high-frequency Helmholtz equation in the presence of point sources and highly heterogeneous and discontinuous wave speed models. We show that it delivers solutions that are provably second-order accurate and do not suffer from the pollution error, as long as a slightly higher order hdG method is used where the polynomial degree is chosen such that $p = \\mathcal{O}(\\log \\omega)$. These results hold even if the discontinuities in the wave speed are not resolved by the hdG mesh, as long as the integration procedure used in the assembly of the stiffness matrix respects the discontinuities. Further, we show that the associated linear systems can be solved using a modification of the method of polarized traces resulting in a method with linear complexity up to a poly-logarithmic factor, or sub-linear complexity in a parallel environment.

To our knowledge and surprise, this note contains the first instance of a numerical method that is at the same time fast ($\\mathcal{O}(N)$ runtime) and accurate (second-order, pollution-free) in the context of models of geophysical interest."

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
- name: scholar
  url: https://scholar.google.com/scholar?cluster=11600260028104262762
  icon_pack: ai
  icon: google-scholar

url_pdf: https://library.seg.org/doi/pdf/10.1190/segam2017-17728116.1?download=true
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
---
