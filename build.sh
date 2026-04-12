#!/bin/bash
set -e

echo "=== Instalando dependências ==="
pip install -r requirements.txt

echo "=== Construindo o site com Pelican ==="
pelican content -o output -s pelicanconf.py

echo "=== Build concluído com sucesso ==="
ls -la output/