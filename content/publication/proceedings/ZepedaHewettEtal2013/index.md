---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

math: true

title: "Time-stepping beyond CFL: A locally one-dimensional scheme for acoustic wave propagation"
authors: [Leonardo Zepeda-Núñez, rjh, Laurent Demanet, Minghua Michel Rao]
date: 2013-08-13
doi: "10.1190/segam2013-1299.1"

# Schedule page publish date (NOT publication's date).
publishDate: 2019-05-31T14:53:55-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "SEG Technical Program Expanded Abstracts 2013"
publication_short: "SEG 2013"

abstract: "In this abstract, we present a case study in the application of a time-stepping method, unconstrained by the CFL condition, for computational acoustic wave propagation in the context of full waveform inversion. The numerical scheme is a locally one-dimensional (LOD) variant of alternating dimension implicit (ADI) method. The LOD method has a maximum time step that is restricted only by the Nyquist sampling rate. The advantage over traditional explicit time-stepping methods occurs in the presence of high contrast media, low frequencies, and steep, narrow perfectly matched layers (PML). The main technical point of the note, from a numerical analysis perspective, is that the LOD scheme is adapted to the presence of a PML. A complexity study is presented and an application to full waveform inversion is shown."

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
  url: https://scholar.google.com/scholar?cluster=10759029221893437853
  icon_pack: ai
  icon: google-scholar

url_pdf: https://library.seg.org/doi/pdf/10.1190/segam2013-1299.1?download=true
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
projects: [helmholtz]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
