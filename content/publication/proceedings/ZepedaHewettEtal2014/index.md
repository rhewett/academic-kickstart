---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "Preconditioning the 2D Helmholtz equation with polarized traces"
authors: [Leonardo Zepeda-Núñez, rjh, Laurent Demanet]
date: 2014-08-05
doi: "10.1190/segam2014-1275.1"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "SEG Technical Program Expanded Abstracts 2014"
publication_short: "SEG 2014"

abstract: "We present a domain decomposition solver for the 2D Helmholtz equation, with a special choice of integral transmission condition that involves polarizing the waves into oneway components. This refinement of the transmission condition is the key to combining local direct solves into an efficient iterative scheme, which can then be deployed in a high-performance computing environment. The method involves an expensive, but embarrassingly parallel precomputation of local Green's functions, and a fast online computation of layer potentials in partitioned low-rank form. The online part has sequential complexity that scales sublinearly with respect to the number of volume unknowns, even in the high-frequency regime. The favorable complexity scaling continues to hold in the context of low-order finite difference schemes for standard community models such as BP and Marmousi2, where convergence occurs in 5 to 10 GMRES iterations."

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
  url: https://scholar.google.com/scholar?cluster=10974742288824197024
  icon_pack: ai
  icon: google-scholar

url_pdf: https://library.seg.org/doi/pdf/10.1190/segam2014-1275.1?download=true
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
