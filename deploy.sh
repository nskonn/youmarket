#!/bin/bash
set -e

echo "🔄 Обновление кода..."
cd /srv/tg-miniapp.webzella.ru/

if [ -d .git ]; then
  git pull origin main || true
fi

echo "📦 Сборка и деплой Docker..."
cd /srv/tg-miniapp.webzella.ru/
docker compose down
docker compose up -d --build

echo "✅ Деплой завершён!"
docker ps
