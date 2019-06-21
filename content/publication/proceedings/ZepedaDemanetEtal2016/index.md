---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "A short note on a pipelined polarized-trace algorithm for 3D Helmholtz"
authors: [Leonardo Zepeda-Núñez, Laurent Demanet, rjh, Adrien Scheuer]
date: 2016-09-01
doi: "10.1190/segam2016-13867211.1"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "SEG Technical Program Expanded Abstracts 2016"
publication_short: "SEG 2016"

abstract: "We present a fast solver for the 3D high-frequency Helmholtz equation in heterogeneous, constant density, acoustic media. The solver is based on the method of polarized traces, coupled with distributed linear algebra libraries and pipelining to obtain a solver with online runtime $\\mathcal{O}(\\max(1,R/n)N \\log N)$ where $N = n^3$ is the total number of degrees of freedom and R is the number of right-hand sides."

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
  url: https://scholar.google.com/scholar?cluster=18045212884533428003
  icon_pack: ai
  icon: google-scholar

url_pdf: https://library.seg.org/doi/pdf/10.1190/segam2016-13867211.1?download=true
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
