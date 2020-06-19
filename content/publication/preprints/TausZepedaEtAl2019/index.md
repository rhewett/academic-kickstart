---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "L-Sweeps: A scalable, parallel preconditioner for the high-frequency Helmholtz equation"
authors: [Matthias Taus, Leonardo Zepeda-Nunez, rjh, Laurent Demanet]
date: 2019-09-03
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-12-01T00:00:00-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Arxiv.Org"
publication_short: "Arxiv.Org"

abstract: "We present the first fast solver for the high-frequency Helmholtz equation that scales optimally in parallel, for a single right-hand side. The L-sweeps approach achieves this scalability by departing from the usual propagation pattern, in which information flows in a 180 degree cone from interfaces in a layered decomposition. Instead, with L-sweeps, information propagates in 90 degree cones induced by a checkerboard domain decomposition (CDD). We extend the notion of accurate transmission conditions to CDDs and introduce a new sweeping strategy to efficiently track the wave fronts as they propagate through the CDD. The new approach decouples the subdomains at each wave front, so that they can be processed in parallel, resulting in better parallel scalability than previously demonstrated in the literature. The method has an overall O((N/p) log w) empirical run-time for N=n^d total degrees-of-freedom in a d-dimensional problem, frequency w, and p=O(n) processors. We introduce the algorithm and provide a complexity analysis for our parallel implementation of the solver. We corroborate all claims in several two- and three-dimensional numerical examples involving constant, smooth, and discontinuous wave speeds. "

# Summary. An optional shortened abstract.
summary: "We present the first fast solver for the high-frequency Helmholtz equation that scales optimally in parallel, for a single right-hand side."

tags: []
categories: []
featured: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: arXiv
  url: https://arxiv.org/abs/1909.01467
  icon_pack: ai
  icon: arxiv

url_pdf: "https://arxiv.org/pdf/1909.01467.pdf"
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
projects: [helmholtz]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
