---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "Reduced storage nodal discontinuous Galerkin methods on semi-structured prismatic meshes"
authors: ["Jesse Chan", Zheng Wang, rjh, "T. Warburton"]
date: 2017-03-01
doi: "10.1016/j.camwa.2017.01.010"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Computers & Mathematics with Applications"
publication_short: "CAMWA"

abstract: "We present a high order time-domain nodal discontinuous Galerkin method for wave problems on hybrid meshes consisting of both wedge and tetrahedral elements. We allow for vertically mapped wedges which can be deformed along the extruded coordinate, and present a simple method for producing quasi-uniform wedge meshes for layered domains. We show that standard mass lumping techniques result in a loss of energy stability on meshes of vertically mapped wedges, and propose an alternative which is both energy stable and efficient. High order convergence is demonstrated, and comparisons are made with existing low-storage methods on wedges. Finally, the computational performance of the method on Graphics Processing Units is evaluated."

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
  url: https://arxiv.org/abs/1607.03399
  icon_pack: ai
  icon: arxiv
- name: scholar
  url: https://scholar.google.com/scholar?cluster=14827502023429351371
  icon_pack: ai
  icon: google-scholar

url_pdf: "https://www.sciencedirect.com/science/article/pii/S0898122117300305/pdfft?md5=4aa395c747e1eb69b5521770df61158a&pid=1-s2.0-S0898122117300305-main.pdf"
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
projects: [pysit]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
