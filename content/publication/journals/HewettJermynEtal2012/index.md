---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "A phase field method for tomographic reconstruction from limited data"
authors: [rjh, Ian Jermyn, Michael T. Heath, Farzad Kamalabadi]
date: 2012-09-01
doi: "10.5244/C.26.120"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "2012 British Machine Vision Conference"
publication_short: "BMVC"

abstract: "Classical tomographic reconstruction methods fail for problems in which there is  extreme temporal and spatial sparsity in the measured data. Reconstruction of coronal  mass ejections (CMEs), a space weather phenomenon with potential negative effects on  the Earth, is one such problem. However, the topological complexity of CMEs renders  recent limited data reconstruction methods inapplicable. We propose an energy function,  based on a phase field level set framework, for the joint segmentation and tomographic  reconstruction of CMEs from measurements acquired by coronagraphs, a type of solar  telescope. Our phase field model deals easily with complex topologies, and is more  robust than classical methods when the data are very sparse. We use a fast variational  algorithm that combines the finite element method with a trust region variant of Newton’s  method to minimize the energy. We compare the results obtained with our model to  classical regularized tomography for synthetic CME-like images."

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
  url: https://scholar.google.com/scholar?cluster=11335879290486888122
  icon_pack: ai
  icon: google-scholar
- name: extended abstract
  url: http://www.bmva.org/bmvc/2012/BMVC/paper120/abstract120.pdf
  icon_pack: far
  icon: file-pdf

url_pdf: http://www.bmva.org/bmvc/2012/BMVC/paper120/paper120.pdf
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
projects: [solartomography]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
