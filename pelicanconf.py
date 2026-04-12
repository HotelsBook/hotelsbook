# HotelsBook Configuration - Fixed
AUTHOR = 'HotelsBook'
SITENAME = 'HotelsBook Consultoria & Hospitalidade'
SITEURL = ''

PATH = 'content'
OUTPUT_PATH = 'output'
THEME = 'theme'
TIMEZONE = 'America/Fortaleza'
DEFAULT_LANG = 'pt'
MARKUP = ('md',)
SLUGIFY_SOURCE = 'basename'

PLUGINS = []

DISPLAY_PAGES_ON_MENU = True
MENUITEMS = [
    ('Início', '/'),
    ('Analytics', '/analytics.html'),
    ('Conciergee', '/conciergee.html'),
    ('Parcerias', '/parcerias.html'),
    ('Sobre', '/sobre.html'),
]