---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Why Hugo?"
subtitle: ""
summary: "Because I had never used it before."
authors: [rjh]
tags: ["meta", "tools", "opinions"]
categories: []
date: 2019-06-07T14:05:02-04:00
lastmod: 2019-06-07T14:05:02-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

When it was time to create a new website using, the `rjh.io` domain, I was faced with my usual decision paralysis:  I could not decide which static site generator I wanted to use.  I was never happy with Nikola, the Python-based static site framework that I used in the previous iteration of my site, yet I am a Python guy.  Other than Nikola, the Python offerings were sparse.  Ultimately, I selected Hugo as the new framework.  I'll give some reasons why here, and try to highlight some of the difficulties I encountered.

However, I must preface this entire discussion with two observations.  First, I am a horrible web developer.  Web development, honestly, makes nearly zero sense to me.  Numerical software architectures and frameworks are simple for me.  Coding high-performance PDE solvers is a cakewalk.  Yet, making a web page to do what I want takes me an absurd amount of time and effort.  Second, I am a horrible UI/UX designer.  I cannot choose on colors and I cannot envision layouts.  That said, I *can* see what I like, and I have had reasonable success at mimicking designs that I think are successful.

Why I abandoned Nikola
----------------------

I was never happy with the imposed content layout.  That is likely largely on me, because I don't like the blog oriented abstraction.  Static pages were an afterthought in the Nikola design and until recently, I had no motivation to write any sort of blog.

Why I chose Hugo
----------------

The most common reason that people cite for selecting Hugo as a static site framework is because "it is fast."  While it is indeed incredibly fast, this was not my reason.  My reason, well, reasons, were two-fold: I had never used the Go language before and I had never used Hugo before.  I simply wanted to try something different.

Of course, working with the Go templates, which Hugo makes use of, is no closer to programming in Go than using Jinja templates in Nikola is to programming in Python, but at the time that did not really occur to me.  Hugo, however, did have a very different content abstraction.  The idea behind single and list pages, with sections and page bundles is fairly easy to wrap your head around.  Unfortunately, it is not as recursive as I might like it to be, but at some point one just needs to deal with it and move on.

Learning Hugo
-------------

To use any static site generator, you need a theme.  I browsed Hugo's theme database and, after another bout of decision paralysis, I initially selected [Joshua Hu's](https://www.joshuahu.io/blog/first-hugo/) [Minimal Academic](https://github.com/jhu247/minimal-academic) theme.  I selected this theme largely because I liked its responsive behavior (despite my annoyance the author's "Hugo is so fast!" motivation...) and used that to try to dive in.  I started hacking at the theme to make it a little bit more mine and found that I was struggling without some of the features of the Bootstrap framework.  Eventually, I forked the theme with the intent to embed the responsive aspects into the Bootstrap framework, to make my life a little easier.  I had some success at getting the layout to appear how I wanted.  I was actually pretty happy with the results, but when it came time to actually assemble content for the site, I seriously struggled with the Hugo content organization.

Learning Hugo itself was definitely non-trivial.  The documentation is comprehensive, but not detailed in useful ways.  I've found that it usually lacks either (and occasionally both of) a good explanation of *why* something works the way it does or good examples of *how* it works so that one can deduce why.  In software development, it is incredibly difficult to work in someone else's code if you cannot answer the "whats and whys" (a topic for a future post), so I definitely struggled there.  The documentation does link helpful videos, which do a better job of explaining some of the design decisions than the documentation itself, but the examples are definitely still lacking.  (On the other hand, the Bootstrap documentation is *excellent* and does a fantastic job of not just telling you how it is, but properly motivating *why* it is a good way to do things.)

Content
-------

While Hugo's content organization is conceptually fairly straight forward, it did not prove easy for me to integrate my previous site's content organization into my new site.  Faced with another bout of decision paralysis on how adapt my old content, I made no further progress before my first semester started and my entire effort went into getting my research started and classes prepared.

Returning to Hugo
-----------------

I returned to work the website after my first teaching year as a professor was over and found myself in the same spot.  (Shocker.)  My solution was to do more deep dives into themes to see if someone else had a framework that I could work with.

I looked back into the [Academic theme](https://themes.gohugo.io/theme/academic/), which I had rejected the previous year because I did not like a lot of the layout and, more accurately, did not understand Hugo well enough to hack at it.  My experience hacking at Minimal Academic was enough for me to get started on making Academic look how I wanted.  Plus, Academic had a significant number of features that allowed me to more easily have a content layout I was comfortable with (correctly separating content from visual display).

This site looks and behaves quite differently than the stock Academic theme, thanks largely to following the visual appearance of my Bootstrap enabled Minimal Academic theme.  Additionally, because I am using it as both my personal site and for my research, it lacks the same focus that many Academic sites have.  During development, I have done my best to submit useful modifications back to the main Academic theme.

So far, I am fairly happy with things.  We will see how long that last :-D.

-rjh
