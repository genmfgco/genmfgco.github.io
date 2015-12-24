Time.zone = "EST"
activate :dotenv

activate :blog do |blog|
  blog.layout = "products"
  blog.name = "products"
  blog.prefix = "products"
  blog.permalink = ":title"
  blog.paginate = true
end

page '/404.html', directory_index: false

helpers do
  def image_large(path)
    imgix_client.path(path).width(1024).to_url
  end

  def image_square(path)
    imgix_client.path(path).width(640).height(640).fit('crop').to_url
  end

  def image_thumb(path)
    imgix_client.path(path).width(720).height(540).fit('crop').to_url
  end

  def imgix_client
    Imgix::Client.new(host: ENV['IMGIX_DOMAIN'], token: ENV['IMGIX_TOKEN'], secure: true)
  end

  def is_page_active(page)
    active = { class: 'active-nav-item' }
    ((current_page.url == page) || (current_page.url.split('/')[1] == page)) ? active : {}
  end
end

activate :livereload
activate :directory_indexes

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :url_root, "http://www.genmfg.co"

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end
