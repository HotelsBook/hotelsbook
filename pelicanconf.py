# HotelsBook Configuration - Professional
AUTHOR = 'HotelsBook Consultoria e Hospitalidade LTDA'
SITENAME = 'HotelsBook'
SITEURL = 'https://hotelsbook.github.io/hotelsbook'

PATH = 'content'
OUTPUT_PATH = 'output'
THEME = 'theme'
TIMEZONE = 'America/Fortaleza'
DEFAULT_LANG = 'pt'
MARKUP = ('md',)
SLUGIFY_SOURCE = 'basename'

PLUGINS = []

DISPLAY_PAGES_ON_MENU = False  # Importante: usa apenas MENUITEMS
MENUITEMS = [
    ('Analytics', '/analytics.html'),
    ('Conciergee', '/conciergee.html'),
    ('Parcerias', '/parcerias.html'),
    ('Sobre', '/sobre.html'),
]