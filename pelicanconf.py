# HotelsBook - Corporate Site Configuration
# Pelican SSG | GitHub Pages | Production Ready

AUTHOR = 'HotelsBook'
SITENAME = 'HotelsBook'
SITEURL = 'https://hotelsbook.github.io/hotelsbook'

# Content paths
PATH = 'content'
OUTPUT_PATH = 'output'
THEME = 'theme'

# Localization (Brazil standard)
TIMEZONE = 'America/Sao_Paulo'
DEFAULT_LANG = 'pt'
DEFAULT_PAGINATION = 10

# Markup & URL structure
MARKUP = ('md',)
SLUGIFY_SOURCE = 'basename'
SLUGIFY_SUBSTITUTE = [(',', ''), ('.', ''), ('?', ''), ('!', ''), (':', ''), (';', '')]

RELATIVE_URLS = False
SAVE_AS = '{slug}.html'
ARTICLE_URL = '{slug}.html'
PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = '{slug}.html'

# Navigation (manual control only)
DISPLAY_PAGES_ON_MENU = False
MENUITEMS = [
    ('Analytics', '/analytics.html'),
    ('Agência de Reservas', '/parcerias.html'),
    ('Sobre', '/sobre.html'),
]

# SEO & Social defaults
DEFAULT_SEO_DESCRIPTION = 'Consultoria estratégica e inteligência de dados para hotelaria. Revenue Management, agenciamento corporativo e soluções tecnológicas para o setor hoteleiro brasileiro.'
OG_DEFAULT_IMAGE = ''
TWITTER_DEFAULT_CARD = 'summary_large_image'

# Performance & Build
SUMMARY_MAX_LENGTH = 140
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Plugins (extend as needed)
PLUGINS = []

# Static assets & SEO files
STATIC_PATHS = ['images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

# Analytics placeholder (add GA4/other when ready)
# GOOGLE_ANALYTICS = ""