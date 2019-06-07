---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "The method of polarized traces for the 3D Helmholtz equation"
authors: [Leonardo Zepeda-Nunez, Adrien Scheuer, rjh, Laurent Demanet]
date: 2019-04-30
doi: "doi.org/10.1190/geo2018-0153.1"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-06-07T15:12:12-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Geophysics"
publication_short: "Geophysics"

abstract: "We present a fast solver for the 3D Helmholtz equation, in heterogeneous, constant density, acoustic media, in the high-frequency regime. The solver is based on the method of polarized traces, a layered domain-decomposition method, where the subdomains are connected via transmission conditions prescribed by the discrete Green's representation formula and artificial reflections are avoided by enforcing non-reflecting boundary conditions between layers. The method of polarized traces allows us to consider only unknowns at the layer interfaces, reducing the overall cost and memory footprint of the solver. We demonstrate that polarizing the wavefields in this manner yields an efficient preconditioner for the reduced system, whose rate of convergence is *independent* of the problem frequency. The resulting preconditioned system is solved iteratively using GMRES, where we never assemble the reduced system or preconditioner, rather we implement them via solving the Helmholtz equation locally within the subdomains. The method is parallelized using MPI and coupled with a distributed linear algebra library and pipelining to obtain an empirical online runtime $\\mathcal{O}(\\max(1,R/L) N \\log N)$ where $N = n^3$ is the total number of degrees of freedom, $L$ is the number of subdomains, and $R$ is the number of right-hand sides. This scaling is favorable for regimes in which the number of sources (distinct right-hand sides) is large, for example enabling large-scale implementations of frequency-domain full waveform inversion (FWI)."

# Summary. An optional shortened abstract.
summary: "We present a faster solver for the 3D Helmholtz equation at high frequencies, including derivations of the preconditioner, and analysis of parallel scalability."

tags: []
categories: []
featured: True

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: arXiv
  url: https://arxiv.org/abs/1801.08655
  icon_pack: ai
  icon: arxiv

url_pdf: "https://library.seg.org/doi/pdf/10.1190/geo2018-0153.1"
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
