#################################################
## Asset Directories
#################################################
config[:js_dir]     = 'assets/javascripts'
config[:css_dir]    = 'assets/stylesheets'
config[:images_dir] = 'assets/images'

#################################################
## Templating Language
#################################################
set :haml, { ugly: true, format: :html5 }

#################################################
## Directory Indexing
#################################################
activate  :directory_indexes

#################################################
## Developement Configuration
#################################################
configure :development do
  activate  :autoprefixer
  activate  :livereload
  activate  :syntax
end

#################################################
## Build Configuration
#################################################
configure :build do
  activate  :minify_css
  activate  :minify_javascript
  activate  :relative_assets
  set       :relative_links, true
end

#################################################
## Deploy Configuration
#################################################
activate :deploy do |deploy|
  deploy.deploy_method  = :git
  deploy.branch         = 'gh-pages'
  deploy.build_before   = true
  deploy.commit_message = 'Deploying to master'
end

#################################################
## Helper Methods
#################################################
# helpers do
# end
