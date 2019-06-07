+++
# A Demo section created with the Blank widget.
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "map"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear.

title = "national park map"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DarkGreen"
  # gradient_end = "ForestGreen"
  
  # Background image.
  # image = "image.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  text_color_light = false

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["10px", "0", "20px", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""

[map]

  inline_source = "//www.arcgis.com/apps/Embed/index.html?webmap=12e3b9ea23da4ce9a6a24b4a6306555a&amp;extent=-128.4971,22.6261,-63.5898,52.2627&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;basemap_gallery=true&amp;disable_scroll=false&amp;theme=light"

  lightbox_source = "https://www.arcgis.com/apps/View/index.html?appid=f621cf0b221b432d811f7462f0b22678"
  lightbox_button_tex = "Embiggen!"

  title = "National Geographic Map-Park Visits"

+++
