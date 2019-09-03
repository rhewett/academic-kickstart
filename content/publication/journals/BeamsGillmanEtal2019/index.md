---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "A parallel shared-memory implementation of a high-order accurate solution technique for variable coefficient Helmholtz problems"
authors: [Natalie Beams, Adrianna Gillman, rjh]
date: 2019-08-27
doi: "10.1016/j.camwa.2019.08.019"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-06-11T09:01:12-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Computers and Mathematics With Applications"
publication_short: "CAMWA"

abstract: "The recently developed Hierarchical Poincaré-Steklov (HPS) method is a high-order discretization technique that comes with a direct solver. Results from previous papers demonstrate the method's ability to solve Helmholtz problems to high accuracy without the so-called pollution effect. While the asymptotic scaling of the direct solver's computational cost is the same as the nested dissection method, serial implementations of the solution technique are not practical for large scale numerical simulations. This manuscript presents the first parallel implementation of the HPS method. Specifically, we introduce an approach for a shared memory implementation of the solution technique utilizing parallel linear algebra. This approach is the foundation for future large scale simulations on supercomputers and clusters with large memory nodes. Performance results on a desktop computer (resembling a large memory node) are presented."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter
links:
- name: arXiv
  url: https://arxiv.org/abs/1812.07167
  icon_pack: ai
  icon: arxiv
- name: scholar
  url: https://scholar.google.com/scholar?cluster=15670797357379700414
  icon_pack: ai
  icon: google-scholar

url_pdf: https://www.sciencedirect.com/science/article/pii/S089812211930416X
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
